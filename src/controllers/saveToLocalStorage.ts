import { userDB } from "../data/userDB";
import { TUserCredentials } from "../types/TUserCredentials";
import { getFromLocalStorage } from "./getFromLocalStorage";

export function saveToLocalStorage(data: TUserCredentials[]) {
  localStorage.setItem('userDB', JSON.stringify(data))
}

window.addEventListener('DOMContentLoaded', function () {
  const data = getFromLocalStorage('userDB') || ''

  if (data.length === 0) {
    saveToLocalStorage(userDB)
  }
})

