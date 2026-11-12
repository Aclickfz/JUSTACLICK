import "dotenv/config";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

import {
  clearCatalogTables,
  isMysqlConfigured,
  seedJobOpening,
  seedNewsPost,
  seedPortfolioItem,
  seedPressRelease,
  seedProduct,
  seedProductCategory,
} from "@/lib/db";
import {
  featuredProducts,
  jobOpenings,
  newsPosts,
  portfolioItems,
  pressReleases,
  productCategories,
} from "@/data/seed-data";

async function seed() {
  if (!isMysqlConfigured()) {
    console.error(
      "Set MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE in .env.local before seeding."
    );
    process.exit(1);
  }

  await clearCatalogTables();

  for (const item of productCategories) {
    await seedProductCategory(item);
  }
  for (const item of featuredProducts) {
    await seedProduct(item);
  }
  for (const item of portfolioItems) {
    await seedPortfolioItem(item);
  }
  for (const item of newsPosts) {
    await seedNewsPost({
      ...item,
      publishedAt: new Date(item.publishedAt),
    });
  }
  for (const item of pressReleases) {
    await seedPressRelease({
      ...item,
      publishedAt: new Date(item.publishedAt),
    });
  }
  for (const item of jobOpenings) {
    await seedJobOpening(item);
  }

  console.log("MySQL seed completed successfully.");
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
