import "dotenv/config";
import { connectDB, isMongoConfigured } from "@/lib/mongodb";
import { Product, ProductCategory } from "@/models/Product";
import { PortfolioItem } from "@/models/Portfolio";
import { NewsPost, PressRelease } from "@/models/News";
import { JobOpening } from "@/models/Career";
import {
  featuredProducts,
  jobOpenings,
  newsPosts,
  portfolioItems,
  pressReleases,
  productCategories,
} from "@/data/seed-data";

async function seed() {
  if (!isMongoConfigured()) {
    console.error(
      "Set a real MONGODB_URI in .env.local before running the seed script."
    );
    process.exit(1);
  }

  await connectDB();

  await Promise.all([
    ProductCategory.deleteMany({}),
    Product.deleteMany({}),
    PortfolioItem.deleteMany({}),
    NewsPost.deleteMany({}),
    PressRelease.deleteMany({}),
    JobOpening.deleteMany({}),
  ]);

  await ProductCategory.insertMany(productCategories);
  await Product.insertMany(featuredProducts);
  await PortfolioItem.insertMany(portfolioItems);
  await NewsPost.insertMany(newsPosts);
  await PressRelease.insertMany(pressReleases);
  await JobOpening.insertMany(jobOpenings);

  console.log("Seed completed successfully.");
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
