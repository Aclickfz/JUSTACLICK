export type UserRole = "buyer" | "wholesaler" | "vendor" | "designer";

export interface IUser {
  id?: number | string;
  name: string;
  email: string;
  passwordHash: string;
  company?: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}
