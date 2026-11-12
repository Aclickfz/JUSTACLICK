-- Just A Click — reusable MySQL queries
USE justaclick;

-- ========== USERS ==========
-- Signup
INSERT INTO users (name, email, password_hash, company, role)
VALUES (?, ?, ?, ?, ?);

-- Find by email (login)
SELECT id, name, email, password_hash, company, role, created_at, updated_at
FROM users
WHERE email = ?
LIMIT 1;

-- List users
SELECT id, name, email, company, role, created_at
FROM users
ORDER BY created_at DESC;

-- ========== PRODUCT CATEGORIES ==========
SELECT id, slug, name, badge, description, items, cta, image_url AS imageUrl
FROM product_categories
ORDER BY id ASC;

INSERT INTO product_categories (slug, name, badge, description, items, cta, image_url)
VALUES (?, ?, ?, ?, CAST(? AS JSON), ?, ?)
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  badge = VALUES(badge),
  description = VALUES(description),
  items = VALUES(items),
  cta = VALUES(cta),
  image_url = VALUES(image_url);

-- ========== PRODUCTS ==========
SELECT id, slug, name, description, price, category_slug AS categorySlug,
       featured, image_url AS imageUrl
FROM products
ORDER BY id ASC;

SELECT id, slug, name, description, price, category_slug AS categorySlug,
       featured, image_url AS imageUrl
FROM products
WHERE featured = 1
ORDER BY id ASC;

SELECT id, slug, name, description, price, category_slug AS categorySlug,
       featured, image_url AS imageUrl
FROM products
WHERE category_slug = ?
ORDER BY id ASC;

INSERT INTO products (slug, name, description, price, category_slug, featured, image_url)
VALUES (?, ?, ?, ?, ?, ?, ?)
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  description = VALUES(description),
  price = VALUES(price),
  category_slug = VALUES(category_slug),
  featured = VALUES(featured),
  image_url = VALUES(image_url);

-- ========== PORTFOLIO ==========
SELECT id, slug, title, description, category, year,
       image_url AS imageUrl, featured
FROM portfolio_items
ORDER BY id ASC;

INSERT INTO portfolio_items (slug, title, description, category, year, image_url, featured)
VALUES (?, ?, ?, ?, ?, ?, ?)
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  description = VALUES(description),
  category = VALUES(category),
  year = VALUES(year),
  image_url = VALUES(image_url),
  featured = VALUES(featured);

-- ========== NEWS ==========
SELECT id, slug, title, excerpt, category,
       cover_image AS coverImage, featured, published_at AS publishedAt
FROM news_posts
ORDER BY published_at DESC;

INSERT INTO news_posts (slug, title, excerpt, category, cover_image, featured, published_at)
VALUES (?, ?, ?, ?, ?, ?, ?)
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  excerpt = VALUES(excerpt),
  category = VALUES(category),
  cover_image = VALUES(cover_image),
  featured = VALUES(featured),
  published_at = VALUES(published_at);

-- ========== PRESS ==========
SELECT id, slug, title, excerpt, published_at AS publishedAt
FROM press_releases
ORDER BY published_at DESC;

INSERT INTO press_releases (slug, title, excerpt, published_at)
VALUES (?, ?, ?, ?)
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  excerpt = VALUES(excerpt),
  published_at = VALUES(published_at);

-- ========== JOBS ==========
SELECT id, slug, title, location, type,
       posted_label AS postedLabel, description, tags
FROM job_openings
ORDER BY id ASC;

INSERT INTO job_openings (slug, title, location, type, posted_label, description, tags)
VALUES (?, ?, ?, ?, ?, ?, CAST(? AS JSON))
ON DUPLICATE KEY UPDATE
  title = VALUES(title),
  location = VALUES(location),
  type = VALUES(type),
  posted_label = VALUES(posted_label),
  description = VALUES(description),
  tags = VALUES(tags);

-- ========== CONTACT LEADS ==========
INSERT INTO contact_leads
  (first_name, last_name, email, phone, company, subject, message)
VALUES (?, ?, ?, ?, ?, ?, ?);

SELECT id, first_name AS firstName, last_name AS lastName, email, phone,
       company, subject, message, created_at AS createdAt
FROM contact_leads
ORDER BY created_at DESC;

-- ========== NEWSLETTER ==========
INSERT INTO newsletter_subscribers (email)
VALUES (?)
ON DUPLICATE KEY UPDATE email = VALUES(email);

SELECT id, email, created_at AS createdAt
FROM newsletter_subscribers
ORDER BY created_at DESC;
