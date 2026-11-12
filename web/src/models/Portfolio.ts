import mongoose, { Schema, models, model } from "mongoose";

export interface IPortfolioItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  imageUrl: string;
  featured?: boolean;
}

const PortfolioSchema = new Schema<IPortfolioItem>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  year: { type: String, default: "2024" },
  imageUrl: { type: String, required: true },
  featured: { type: Boolean, default: false },
});

export const PortfolioItem =
  models.PortfolioItem ||
  model<IPortfolioItem>("PortfolioItem", PortfolioSchema);
