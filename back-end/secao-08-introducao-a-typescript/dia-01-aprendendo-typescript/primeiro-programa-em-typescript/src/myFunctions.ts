import { User } from "./types/User";

export const getUserNames = (userList: User[]): string[] => userList.map(user => user.name);

export const getUsersByRepoQyantity = (userList: User[], repoQuantity: number): string[] => userList.filter(user => user.repositories >= repoQuantity).map(user => user.name);