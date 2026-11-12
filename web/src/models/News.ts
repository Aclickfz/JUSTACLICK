import mongoose, { Schema, models, model } from "mongoose";

export interface INewsPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  featured: boolean;
  publishedAt: Date;
}

export interface IPressRelease {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: Date;
}

const NewsPostSchema = new Schema<INewsPost>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  category: { type: String, required: true },
  coverImage: { type: String, required: true },
  featured: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
});

const PressReleaseSchema = new Schema<IPressRelease>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now },
});

export const NewsPost =
  models.NewsPost || model<INewsPost>("NewsPost", NewsPostSchema);

export const PressRelease =
  models.PressRelease ||
  model<IPressRelease>("PressRelease", PressReleaseSchema);
