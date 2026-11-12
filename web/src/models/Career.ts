import mongoose, { Schema, models, model } from "mongoose";

export interface IJobOpening {
  slug: string;
  title: string;
  location: string;
  type: string;
  postedLabel: string;
  description: string;
  tags: string[];
}

const JobOpeningSchema = new Schema<IJobOpening>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  postedLabel: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
});

export const JobOpening =
  models.JobOpening || model<IJobOpening>("JobOpening", JobOpeningSchema);
