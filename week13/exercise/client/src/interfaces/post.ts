import { IUser } from "./user";

export interface IPost {
    id:number;
    createdAt: string;
    user:IUser
    title: string;
    content: string;
    userId: number;
  }