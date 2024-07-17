
import { navData } from "./data";

let navLinks = document.querySelector('.nav-links') as Element
let navHeader = document.querySelector('.nav-header') as HTMLDivElement

let navMenuContainer = document.querySelector('.nav-menu-container') as HTMLDivElement

let itemToExcludeCaret = ['about', 'contact']

// this function loads the nav links data
let navLinkItems = navData.map((item, index) => {

  return `<div class="link ">
          <div class="link-header ${index === 0 ? 'active-link' : ''}">
            <li ass="nav-link">${item.title}</li>
            <i class="fa fa-caret-down ${itemToExcludeCaret.includes(item.title) ? 'hide-icon' : ''}"></i>
          </div>
          </div>`
}).join('')


if (navLinkItems !== null) {
  navLinks.innerHTML = navLinkItems;
}

// this function add or remove the active link depending on which link is in focus

let links = navLinks.querySelectorAll('.link-header')


links.forEach((link) => {
  link.addEventListener('mouseover', function () {
    if (!link.classList.contains('active-link')) {
      link.classList.add('active-link')
    }

    links.forEach((item, index) => {
      if ((item !== link) && index !== 0) {
        item.classList.remove('active-link')
      }
    })
  }
  )
})


// function to load the content of each nav link.
links.forEach((link) => {
  link.addEventListener('mouseover', function (e) {
    const selected = link.querySelector('li')?.textContent

    const selectedMenu = navData.find((item) => item.title === selected)


    const menu = selectedMenu?.menu?.map((menuItem) => {
      return `
      <li>${menuItem}</li>
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