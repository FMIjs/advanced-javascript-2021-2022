import { UserRole } from "../enums/user-role";

export interface IUser {
  name: string;
  age: number;
  role: UserRole
}
