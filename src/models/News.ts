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
