
import { navData } from "./data";

let navLinks = document.querySelector('.nav-links') as Element

let navMenuContainer = document.querySelector('.nav-menu-container') as HTMLDivElement

let itemToExcludeCaret = ['about', 'contact']

// this function loads the nav links data
let navLinkItems = navData.map((item, index) => {

  return ` <li class="link ${index === 0 ? 'active' : ''}">
            <a  href=${item.url} target="_blank" class="nav-link">${item.title}</a>
            <i class="la la-caret-down ${itemToExcludeCaret.includes(item.title) ? 'hide-icon' : ''}"></i>
            </li>`
}).join('')


if (navLinkItems !== null) {
  navLinks.innerHTML = navLinkItems;
}

// this function add or remove the active link depending on which link is in focus

let links = navLinks.querySelectorAll('.link')


links.forEach((link) => {
  link.addEventListener('mouseover', function () {
    if (!link.classList.contains('active')) {
      link.classList.add('active')
    }

    links.forEach((item, index) => {
      if ((item !== link) && index !== 0) {
        item.classList.remove('active')
      }
    })
  }
  )
})


// function to load the content of each nav link.
links.forEach((link) => {
  link.addEventListener('mouseover', function (e) {
    const selected = link.querySelector('a')?.textContent

    const selectedMenu = navData.find((item) => item.title === selected)


    const menu = selectedMenu?.menu?.map((menuItem) => {
      return `
      <li><a href="">${menuItem}</a></li>
    `
    }).join('')

    let ulMenu = navMenuContainer.querySelector('.nav-menu') as Element

    if (menu === undefined) {
      navMenuContainer.style.visibility = 'hidden'
      return
    } else {
      ulMenu.innerHTML = menu;
    }

    let dim = link.getBoundingClientRect();
    navMenuContainer.style.top = `${dim.bottom + 35}`;
    navMenuContainer.style.left = `${dim.left}`;
    navMenuContainer.style.visibility = 'visible'

  })
})


//event handler get the coordinates of the menu  container and the position of the mouse to determine when mouse over is completed and hide the menu.

window.addEventListener('mouseover', function (e: MouseEvent) {

  const dim = navMenuContainer.getBoundingClientRect();

  let left = dim.left;
  let right = dim.right;
  let bottom = dim.bottom;
  if ((e.pageX < left) || (e.pageX > right) || (e.pageY > bottom)) {
    navMenuContainer.style.visibility = 'hidden'

  }

});