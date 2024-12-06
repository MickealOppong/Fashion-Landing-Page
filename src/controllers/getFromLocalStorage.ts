import { TUserCredentials } from "../types/TUserCredentials";

export function getFromLocalStorage(data: string): TUserCredentials[] {
  const userData = localStorage.getItem(data);
  if (userData) {
    return JSON.parse(userData)
  }
  return []
}