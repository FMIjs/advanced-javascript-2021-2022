import { UserRole } from "./enums/user-role";
import { IUser } from "./interfaces/user";
import { environment } from './environment/environment';

console.log(environment.API_URL);

function myFunc(str: string, count: number): string {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

function userFactory(name: string, age: number): IUser {
  return {
    name,
    age,
    role: UserRole.USER
  }
}

const user = userFactory('Ivan', 20);

console.log(user);

const result = myFunc('321', 321);

console.log(result);