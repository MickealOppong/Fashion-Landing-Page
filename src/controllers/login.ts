

//console.log(getFromLocalStorage('userDB'));

import { loginView } from "../components/loginView";
import { userDetails } from "../components/userDetails";
import { defaultUser } from "../data/defaultUser";
import { TUser } from "../types/TUser";
import { TUserCredentials } from "../types/TUserCredentials";
import fetchData from "../util/fetchData";
import { getFromLocalStorage } from "./getFromLocalStorage";
import { navigateTo, router } from "./router";

//fetch data locally
export const URL = 'http://localhost:5500/src/data/employees.json'
const data: TUser[] = await fetchData(URL)

//console.log(data);

export function isUserLoggedIn(id: number): boolean {
  const user = getFromLocalStorage('userDB').find((user) => user.id === id)
  if (user) {
    return user.isLoggedIn
  }
  return false
}


export function isRememberMe(): boolean {
  const user = localStorage.getItem('remember_user') || ''
  if (user) {
    return true;
  }
  return false
}

export function isUserLoggedOut(): boolean {
  const logout = localStorage.getItem('_logout') || ''
  if (logout) {
    return true;
  }
  return false
}
//set nav user
const navUser = document.querySelector('.user-icon')

if (navUser) {
  navUser?.addEventListener('click', function (e) {
    e.preventDefault()
    const app = document.getElementById('app') as HTMLElement

    const user = getFromLocalStorage('userDB').find((user) => user.isLoggedIn) as TUserCredentials
    if (user) {
      const dbUser = data.find((item) => item._id === user.id)
      if (isUserLoggedIn(user.id ? user.id : 0)) {
        navigateTo(`/users/${user.id}`)
        const result = router()
        app.innerHTML = result.route.view

        const singleUSer: HTMLElement | null = document.querySelector('.single-user-container')
        if (singleUSer !== null) {
          singleUSer.innerHTML = userDetails(dbUser ? dbUser : defaultUser)
        }

      } else {

        navigateTo('/login')
        const result = router()
        app.innerHTML = result.route.view
        const loginContainer = document.querySelector('.login-container') as HTMLElement
        loginContainer.append(loginView())
      }
    }
  })
}


//handle remember me
const rememberMeInput = document.querySelector('.remember-me') as HTMLElement

if (rememberMeInput) {
  const isRememberMe = localStorage.getItem('remember_user') || ''

  if (isRememberMe) {
    rememberMeInput.setAttribute('checked', isRememberMe ? 'true' : 'false')
  }
  rememberMeInput.addEventListener('click', function (e) {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.checked) {
        localStorage.setItem('_user', JSON.stringify(e.target.checked))
      } else {
        localStorage.removeItem('_user')
        localStorage.removeItem('remember_user')
      }

    }
  })
}


