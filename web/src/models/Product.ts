import mongoose, { Schema, models, model } from "mongoose";

export interface IProductCategory {
  slug: string;
  name: string;
  badge: string;
  description: string;
  items: string[];
  cta: string;
  imageUrl: string;
}

export interface IProduct {
  slug: string;
  name: string;
  description: string;
  price: number;
  categorySlug: string;
  featured: boolean;
  imageUrl: string;
}

const ProductCategorySchema = new Schema<IProductCategory>({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  badge: { type: String, required: true },
  description: { type: String, required: true },
  items: [{ type: String }],
  cta: { type: String, default: "View Collection" },
  imageUrl: { type: String, required: true },
});

const ProductSchema = new Schema<IProduct>({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  categorySlug: { type: String, required: true },
  featured: { type: Boolean, default: false },
  imageUrl: { type: String, required: true },
});

export const ProductCategory =
  models.ProductCategory ||
  model<IProductCategory>("ProductCategory", ProductCategorySchema);

export const Product =
  models.Product || model<IProduct>("Product", ProductSchema);
