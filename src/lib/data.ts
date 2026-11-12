import {
  featuredProducts,
  jobOpenings,
  newsPosts,
  portfolioItems,
  pressReleases,
  productCategories,
} from "@/data/seed-data";
import {
  isMysqlConfigured,
  listFeaturedProducts,
  listJobOpenings,
  listNewsPosts,
  listPortfolioItems,
  listPressReleases,
  listProductCategories,
} from "@/lib/db";

export async function getProductCategories() {
  if (!isMysqlConfigured()) return productCategories;
  try {
    const docs = await listProductCategories();
    return docs.length ? docs : productCategories;
  } catch {
    return productCategories;
  }
}

export async function getFeaturedProducts() {
  if (!isMysqlConfigured()) return featuredProducts;
  try {
    const docs = await listFeaturedProducts();
    return docs.length ? docs : featuredProducts;
  } catch {
    return featuredProducts;
  }
}

export async function getPortfolioItems() {
  if (!isMysqlConfigured()) return portfolioItems;
  try {
    const docs = await listPortfolioItems();
    return docs.length ? docs : portfolioItems;
  } catch {
    return portfolioItems;
  }
}

export async function getNewsPosts() {
  if (!isMysqlConfigured()) return newsPosts;
  try {
    const docs = await listNewsPosts();
    return docs.length ? docs : newsPosts;
  } catch {
    return newsPosts;
  }
}

export async function getPressReleases() {
  if (!isMysqlConfigured()) return pressReleases;
  try {
    const docs = await listPressReleases();
    return docs.length ? docs : pressReleases;
  } catch {
    return pressReleases;
  }
}

export async function getJobOpenings() {
  if (!isMysqlConfigured()) return jobOpenings;
  try {
    const docs = await listJobOpenings();
    return docs.length ? docs : jobOpenings;
  } catch {
    return jobOpenings;
  }
}
