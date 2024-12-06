
import { getFromLocalStorage } from "./getFromLocalStorage"
import { navigateTo } from "./router"
import { saveToLocalStorage } from "./saveToLocalStorage"

const logoutBtn = document.querySelector('.power-btn')


if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    const users = getFromLocalStorage('userDB');
    let data = users.map((itm) => {
      if (itm.isLoggedIn) {
        itm.isLoggedIn = !itm.isLoggedIn
      }
      return itm
    })
    saveToLocalStorage(data)
    localStorage.setItem('_logout', '_logout')
    navigateTo('/')
    location.href = '/'
  })
}

