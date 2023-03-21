export enum UserRole {
  STUDENT = "student",
  TUTOR = "tutor",
  ADMIN = "admin",
}

export type User = {
  id: number;
  role: UserRole;
};

export type OptionalUser = User | null;
