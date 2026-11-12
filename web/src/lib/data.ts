import { connectDB, isMongoConfigured } from "@/lib/mongodb";
import {
  featuredProducts,
  jobOpenings,
  newsPosts,
  portfolioItems,
  pressReleases,
  productCategories,
} from "@/data/seed-data";
import { Product, ProductCategory } from "@/models/Product";
import { PortfolioItem } from "@/models/Portfolio";
import { NewsPost, PressRelease } from "@/models/News";
import { JobOpening } from "@/models/Career";

export async function getProductCategories() {
  if (!isMongoConfigured()) return productCategories;
  try {
    await connectDB();
    const docs = await ProductCategory.find().lean();
    return docs.length ? docs : productCategories;
  } catch {
    return productCategories;
  }
}

export async function getFeaturedProducts() {
  if (!isMongoConfigured()) return featuredProducts;
  try {
    await connectDB();
    const docs = await Product.find({ featured: true }).lean();
    return docs.length ? docs : featuredProducts;
  } catch {
    return featuredProducts;
  }
}

export async function getPortfolioItems() {
  if (!isMongoConfigured()) return portfolioItems;
  try {
    await connectDB();
    const docs = await PortfolioItem.find().lean();
    return docs.length ? docs : portfolioItems;
  } catch {
    return portfolioItems;
  }
}

export async function getNewsPosts() {
  if (!isMongoConfigured()) return newsPosts;
  try {
    await connectDB();
    const docs = await NewsPost.find().sort({ publishedAt: -1 }).lean();
    return docs.length ? docs : newsPosts;
  } catch {
    return newsPosts;
  }
}

export async function getPressReleases() {
  if (!isMongoConfigured()) return pressReleases;
  try {
    await connectDB();
    const docs = await PressRelease.find().sort({ publishedAt: -1 }).lean();
    return docs.length ? docs : pressReleases;
  } catch {
    return pressReleases;
  }
}

export async function getJobOpenings() {
  if (!isMongoConfigured()) return jobOpenings;
  try {
    await connectDB();
    const docs = await JobOpening.find().lean();
    return docs.length ? docs : jobOpenings;
  } catch {
    return jobOpenings;
  }
}
