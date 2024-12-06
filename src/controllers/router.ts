
import { homeView } from "../components/homeView";
import { loginView } from "../components/loginView";
import { registerView } from "../components/registerView";
import { userDB } from "../data/userDB";
import { TUserCredentials } from "../types/TUserCredentials";
import { getFromLocalStorage } from "./getFromLocalStorage";
import { isRememberMe, isUserLoggedIn, isUserLoggedOut } from "./login";
import { saveToLocalStorage } from "./saveToLocalStorage";

const currentPathToRegex = (path: string) => new RegExp('^' + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")


export const router = () => {
  const routes = [
    {
      path: '/', view: `<div class="home-container"></div>`
    },
    {
      path: '/index.html', view: `<div class="home-container"></div>`
    },
    {
      path: '/users/:id', view: `<div class="single-user-container">single user</div>`
    },
    {
      path: '/login', view: `<div class="login-container"></div>`
    },
    {
      path: '/register', view: `<div class="register-container"></div>`
    },
  ]
  const currentPath = location.pathname;


  const routeMatch = routes.map((route) => {
    return {
      route,
      result: currentPath.match(currentPathToRegex(route.path))
    }
  })

  let matchRoute = routeMatch.find((route) => route.result !== null || route.route.path === currentPath)

  //console.log(matchRoute);

  if (!matchRoute) {
    matchRoute = {
      route: { path: '404', view: 'Page not found' },
      result: null
    }
  }

  // console.log(matchRoute);

  return matchRoute

}

export const navigateTo = (link: string) => {
  history.pushState(link, "", link)
  router();
}

function init() {
  window.addEventListener('DOMContentLoaded', () => {


    const app = document.getElementById('app') as HTMLElement

    const user = getFromLocalStorage('userDB').find((user) => user.isLoggedIn) as TUserCredentials
    if (isRememberMe() && !isUserLoggedOut()) {
      const result = router()
      app.innerHTML = result.route.view
      const homeContainer = document.querySelector('.home-container') as HTMLElement
      homeContainer.append(homeView())
    } else if (isUserLoggedIn(user ? user.id : 0)) {
      const result = router()
      app.innerHTML = result.route.view
      const homeContainer = document.querySelector('.home-container') as HTMLElement
      homeContainer.append(homeView())
    }
    else {

      navigateTo('/login')
      const result = router()
      app.innerHTML = result.route.view

      initLogin()

      //login user
      const loginForm = document.querySelector('.login-form') as HTMLFormElement
      loginForm.addEventListener('submit', function (e) {
        if (e.target instanceof HTMLFormElement) {
          e.preventDefault()
          const formData = new FormData(e.target);
          const formValues = Object.fromEntries(formData);
          const email = formValues.email as string
          const password = formValues.password as string

          const user = getFromLocalStorage('userDB').find((user) => user.email === email)

          if (user?.email === email && user.password === password) {
            let data = getFromLocalStorage('userDB').map((itm) => {
              if (itm.id === user.id) {
                itm.isLoggedIn = !itm.isLoggedIn
              }
              return itm
            })
            const remember = localStorage.getItem('_user') || ''
            if (remember) {
              localStorage.setItem('remember_user', JSON.stringify(user.id))
              localStorage.removeItem('_user')
            }
            isUserLoggedIn(user.id)
            saveToLocalStorage(data)
            navigateTo('/')
            location.href = '/'
          }

        }
      })



    }
    //handle register lick click
    const registerBtn = document.querySelector('.register-btn')

    if (registerBtn) {
      registerBtn?.addEventListener('click', function () {
        navigateTo('/register')
        const route = router();
        app.innerHTML = route.route.view


        const registerContainer = document.querySelector('.register-container') as HTMLElement
        if (registerContainer) {
          registerContainer.appendChild(registerView())


          //register
          const registerForm = document.querySelector('.register-form') as HTMLFormElement


          if (registerForm) {
            registerForm.addEventListener('submit', function (e) {
              if (e.target instanceof HTMLFormElement) {
                e.preventDefault()
                const formData = new FormData(e.target);
                const formValues = Object.fromEntries(formData);
                const email = formValues.email as string
                const password = formValues.password as string
                const lastId = userDB.length;


                if (email && password) {
                  userDB.push({ id: lastId + 1, email, password, isLoggedIn: false })
                  saveToLocalStorage(userDB)
                  navigateTo('/login')
                  const route = router();
                  app.innerHTML = route.route.view
                  // location.href = "/login"
                  initLogin()
                }
              }
            })
          }

        }
      })

    }

  })
}
init()

function initLogin() {
  const loginContainer = document.querySelector('.login-container') as HTMLElement
  loginContainer.append(loginView())
}
window.addEventListener('popstate', router)


