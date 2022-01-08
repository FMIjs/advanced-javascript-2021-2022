export interface IBase {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type BaseKeys = keyof IBase;