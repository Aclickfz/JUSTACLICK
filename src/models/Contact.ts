export interface IContactLead {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  createdAt?: Date;
}

export interface INewsletterSubscriber {
  email: string;
  createdAt?: Date;
}
