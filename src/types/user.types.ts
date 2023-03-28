export enum UserRole {
  STUDENT = "student",
  TUTOR = "tutor",
  ADMIN = "admin",
}

export type User = {
  id: number;
  username: string;
  // role: UserRole;
};

export type OptionalUser = User | null;
