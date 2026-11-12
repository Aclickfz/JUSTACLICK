import mongoose, { Schema, models, model } from "mongoose";

export interface IContactLead {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface INewsletterSubscriber {
  email: string;
  createdAt: Date;
}

const ContactLeadSchema = new Schema<IContactLead>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const NewsletterSchema = new Schema<INewsletterSubscriber>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const ContactLead =
  models.ContactLead || model<IContactLead>("ContactLead", ContactLeadSchema);

export const NewsletterSubscriber =
  models.NewsletterSubscriber ||
  model<INewsletterSubscriber>("NewsletterSubscriber", NewsletterSchema);
