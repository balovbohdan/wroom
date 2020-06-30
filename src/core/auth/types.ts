export type User = {
  email: string;
  emailVerified: boolean;
  avatar: string;
};

export type AuthResult = {
  expiresIn: number;
  accessToken: string;
  scope?: string;
};
