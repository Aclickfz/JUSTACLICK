import type { RowDataPacket } from "mysql2";
import { execute, isMysqlConfigured, queryRows } from "@/lib/mysql";
import type { IUser, UserRole } from "@/models/User";
import type { IProduct, IProductCategory } from "@/models/Product";
import type { IPortfolioItem } from "@/models/Portfolio";
import type { INewsPost, IPressRelease } from "@/models/News";
import type { IJobOpening } from "@/models/Career";
import type { IContactLead } from "@/models/Contact";

function parseJsonArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed.map(String) : [];
    } catch {
      return [];
    }
  }
  return [];
}

export { isMysqlConfigured };

export async function findUserByEmail(email: string) {
  const rows = await queryRows<(IUser & RowDataPacket)[]>(
    `SELECT id, name, email, password_hash AS passwordHash, company, role,
            created_at AS createdAt, updated_at AS updatedAt
     FROM users WHERE email = :email LIMIT 1`,
    { email: email.toLowerCase() }
  );
  return rows[0] ?? null;
}

export async function createUser(input: {
  name: string;
  email: string;
  passwordHash: string;
  company?: string;
  role?: UserRole;
}) {
  const result = await execute(
    `INSERT INTO users (name, email, password_hash, company, role)
     VALUES (:name, :email, :passwordHash, :company, :role)`,
    {
      name: input.name,
      email: input.email.toLowerCase(),
      passwordHash: input.passwordHash,
      company: input.company ?? null,
      role: input.role ?? "buyer",
    }
  );
  return result.insertId;
}

export async function listProductCategories(): Promise<IProductCategory[]> {
  const rows = await queryRows<RowDataPacket[]>(
    `SELECT slug, name, badge, description, items, cta, image_url AS imageUrl
     FROM product_categories ORDER BY id ASC`
  );
  return rows.map((row) => ({
    slug: String(row.slug),
    name: String(row.name),
    badge: String(row.badge),
    description: String(row.description),
    items: parseJsonArray(row.items),
    cta: String(row.cta),
    imageUrl: String(row.imageUrl),
  }));
}

export async function listFeaturedProducts(): Promise<IProduct[]> {
  const rows = await queryRows<RowDataPacket[]>(
    `SELECT slug, name, description, price, category_slug AS categorySlug,
            featured, image_url AS imageUrl
     FROM products WHERE featured = 1 ORDER BY id ASC`
  );
  return rows.map((row) => ({
    slug: String(row.slug),
    name: String(row.name),
    description: String(row.description),
    price: Number(row.price),
    categorySlug: String(row.categorySlug),
    featured: Boolean(row.featured),
    imageUrl: String(row.imageUrl),
  }));
}

export async function listPortfolioItems(): Promise<IPortfolioItem[]> {
  const rows = await queryRows<RowDataPacket[]>(
    `SELECT slug, title, description, category, year,
            image_url AS imageUrl, featured
     FROM portfolio_items ORDER BY id ASC`
  );
  return rows.map((row) => ({
    slug: String(row.slug),
    title: String(row.title),
    description: String(row.description),
    category: String(row.category),
    year: String(row.year),
    imageUrl: String(row.imageUrl),
    featured: Boolean(row.featured),
  }));
}

export async function listNewsPosts(): Promise<INewsPost[]> {
  const rows = await queryRows<RowDataPacket[]>(
    `SELECT slug, title, excerpt, category, cover_image AS coverImage,
            featured, published_at AS publishedAt
     FROM news_posts ORDER BY published_at DESC`
  );
  return rows.map((row) => ({
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt),
    category: String(row.category),
    coverImage: String(row.coverImage),
    featured: Boolean(row.featured),
    publishedAt: new Date(row.publishedAt),
  }));
}

export async function listPressReleases(): Promise<IPressRelease[]> {
  const rows = await queryRows<RowDataPacket[]>(
    `SELECT slug, title, excerpt, published_at AS publishedAt
     FROM press_releases ORDER BY published_at DESC`
  );
  return rows.map((row) => ({
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt),
    publishedAt: new Date(row.publishedAt),
  }));
}

export async function listJobOpenings(): Promise<IJobOpening[]> {
  const rows = await queryRows<RowDataPacket[]>(
    `SELECT slug, title, location, type, posted_label AS postedLabel,
            description, tags
     FROM job_openings ORDER BY id ASC`
  );
  return rows.map((row) => ({
    slug: String(row.slug),
    title: String(row.title),
    location: String(row.location),
    type: String(row.type),
    postedLabel: String(row.postedLabel),
    description: String(row.description),
    tags: parseJsonArray(row.tags),
  }));
}

export async function createContactLead(
  input: Omit<IContactLead, "createdAt">
) {
  await execute(
    `INSERT INTO contact_leads
      (first_name, last_name, email, phone, company, subject, message)
     VALUES (:firstName, :lastName, :email, :phone, :company, :subject, :message)`,
    {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone ?? null,
      company: input.company ?? null,
      subject: input.subject,
      message: input.message,
    }
  );
}

export async function upsertNewsletterSubscriber(email: string) {
  await execute(
    `INSERT INTO newsletter_subscribers (email)
     VALUES (:email)
     ON DUPLICATE KEY UPDATE email = VALUES(email)`,
    { email: email.toLowerCase() }
  );
}

export async function clearCatalogTables() {
  await execute("SET FOREIGN_KEY_CHECKS = 0");
  await execute("TRUNCATE TABLE products");
  await execute("TRUNCATE TABLE product_categories");
  await execute("TRUNCATE TABLE portfolio_items");
  await execute("TRUNCATE TABLE news_posts");
  await execute("TRUNCATE TABLE press_releases");
  await execute("TRUNCATE TABLE job_openings");
  await execute("SET FOREIGN_KEY_CHECKS = 1");
}

export async function seedProductCategory(item: IProductCategory) {
  await execute(
    `INSERT INTO product_categories
      (slug, name, badge, description, items, cta, image_url)
     VALUES (:slug, :name, :badge, :description, CAST(:items AS JSON), :cta, :imageUrl)
     ON DUPLICATE KEY UPDATE
       name = VALUES(name),
       badge = VALUES(badge),
       description = VALUES(description),
       items = VALUES(items),
       cta = VALUES(cta),
       image_url = VALUES(image_url)`,
    {
      ...item,
      items: JSON.stringify(item.items),
    }
  );
}

export async function seedProduct(item: IProduct) {
  await execute(
    `INSERT INTO products
      (slug, name, description, price, category_slug, featured, image_url)
     VALUES (:slug, :name, :description, :price, :categorySlug, :featured, :imageUrl)
     ON DUPLICATE KEY UPDATE
       name = VALUES(name),
       description = VALUES(description),
       price = VALUES(price),
       category_slug = VALUES(category_slug),
       featured = VALUES(featured),
       image_url = VALUES(image_url)`,
    {
      ...item,
      featured: item.featured ? 1 : 0,
    }
  );
}

export async function seedPortfolioItem(item: IPortfolioItem) {
  await execute(
    `INSERT INTO portfolio_items
      (slug, title, description, category, year, image_url, featured)
     VALUES (:slug, :title, :description, :category, :year, :imageUrl, :featured)
     ON DUPLICATE KEY UPDATE
       title = VALUES(title),
       description = VALUES(description),
       category = VALUES(category),
       year = VALUES(year),
       image_url = VALUES(image_url),
       featured = VALUES(featured)`,
    {
      ...item,
      year: item.year ?? "2024",
      featured: item.featured ? 1 : 0,
    }
  );
}

export async function seedNewsPost(item: INewsPost) {
  await execute(
    `INSERT INTO news_posts
      (slug, title, excerpt, category, cover_image, featured, published_at)
     VALUES (:slug, :title, :excerpt, :category, :coverImage, :featured, :publishedAt)
     ON DUPLICATE KEY UPDATE
       title = VALUES(title),
       excerpt = VALUES(excerpt),
       category = VALUES(category),
       cover_image = VALUES(cover_image),
       featured = VALUES(featured),
       published_at = VALUES(published_at)`,
    {
      ...item,
      featured: item.featured ? 1 : 0,
      publishedAt: new Date(item.publishedAt)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    }
  );
}

export async function seedPressRelease(item: IPressRelease) {
  await execute(
    `INSERT INTO press_releases (slug, title, excerpt, published_at)
     VALUES (:slug, :title, :excerpt, :publishedAt)
     ON DUPLICATE KEY UPDATE
       title = VALUES(title),
       excerpt = VALUES(excerpt),
       published_at = VALUES(published_at)`,
    {
      ...item,
      publishedAt: new Date(item.publishedAt)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    }
  );
}

export async function seedJobOpening(item: IJobOpening) {
  await execute(
    `INSERT INTO job_openings
      (slug, title, location, type, posted_label, description, tags)
     VALUES (:slug, :title, :location, :type, :postedLabel, :description, CAST(:tags AS JSON))
     ON DUPLICATE KEY UPDATE
       title = VALUES(title),
       location = VALUES(location),
       type = VALUES(type),
       posted_label = VALUES(posted_label),
       description = VALUES(description),
       tags = VALUES(tags)`,
    {
      ...item,
      tags: JSON.stringify(item.tags),
    }
  );
}
