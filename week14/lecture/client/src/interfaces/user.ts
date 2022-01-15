import { IPost } from "./post";

export interface IUser {
  email: string;
  password: string;
  name: string;
  info: string | null;
  posts?: IPost[]
}
