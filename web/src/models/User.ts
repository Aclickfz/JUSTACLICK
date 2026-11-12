import mongoose, { Schema, models, model } from "mongoose";

export type UserRole = "buyer" | "wholesaler" | "vendor" | "designer";

export interface IUser {
  name: string;
  email: string;
  passwordHash: string;
  company?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    company: { type: String },
    role: {
      type: String,
      enum: ["buyer", "wholesaler", "vendor", "designer"],
      default: "buyer",
    },
  },
  { timestamps: true }
);

export const User = models.User || model<IUser>("User", UserSchema);
