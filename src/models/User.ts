export type UserRole = "buyer" | "wholesaler" | "vendor" | "designer";

export interface IUser {
  id?: number | string;
  name: string;
  email: string;
  passwordHash: string;
  company?: string;
  role: UserRole;
  emailVerified?: boolean;
  emailVerifiedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export type AuthTokenType = "email_verify" | "password_reset";

export interface IAuthToken {
  id?: number;
  userId: number;
  token: string;
  type: AuthTokenType;
  expiresAt: Date;
  usedAt?: Date | null;
}
