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
