
import { navData } from "./data";

let navLinks = document.querySelector('.nav-links') as Element

let navMenuContainer = document.querySelector('.nav-menu-container') as HTMLDivElement

let itemToExcludeCaret = ['about', 'contact']

// this function loads the nav links data
let navLinkItems = navData.map((item, index) => {

  return ` <li class="link ${index === 0 ? 'active' : ''}">
            <a  href=${item.url} target="_blank" class="nav-link">${item.title}</a>
            <i class="fa fa-caret-down ${itemToExcludeCaret.includes(item.title) ? 'hide-icon' : ''}"></i>
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
  link.addEventListener('mouseover', function () {
    const selected = link.querySelector('a')?.textContent

    const selectedMenu = navData.find((item) => item.title === selected)

    const menu = selectedMenu?.menu?.map((item) => {
      console.log(item);

      const { title, links } = item;

      if (title) {
        return `
        <div>
          <p>${title}</p>
          <ul>
              ${links.map((link) => {
          return `
          <li class="link"><a  class="nav-link" href=${link.url}>${link.text
            }</a></li>
          `}).join('')}
          </ul>
          </div>
      `
      } else {
        return `
        <div>
          <ul>
              ${links.map((link) => {
          return `
          <li class="link"><a  class="nav-link" href=${link.url}>${link.text
            }</a></li>
          `}).join('')}
          </ul>
          </div>
      `
      }
    }).join('')

    let navMenu = navMenuContainer.querySelector('.nav-menu') as Element

    if (menu === undefined) {
      navMenuContainer.style.visibility = 'hidden'
      return
    } else {
      navMenu.innerHTML = menu;
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


//handle search button click
const searchBtn = document.querySelector('.btn-search')
const closeSVG = document.querySelector('.la-times')
const searchSVG = document.querySelector('.la-search')
const searchForm = document.querySelector('.form-search');

searchBtn?.addEventListener('click', function () {

  if (closeSVG?.classList.contains('show')) {
    closeSVG?.classList.add('hide')
    closeSVG?.classList.remove('show')
    searchSVG?.classList.remove('hide')
    searchForm?.classList.remove('show')
  } else {
    closeSVG?.classList.remove('hide')
    closeSVG?.classList.add('show')
    searchSVG?.classList.add('hide')
    searchForm?.classList.add('show')
  }

})


//handle user menu on user icon click
const userMenu = document.querySelector('.user-menu') as HTMLDivElement;
const userBtn = document.querySelector('.btn-user');
//const navCenter = document.querySelector('.nav-c') as HTMLDivElement

userBtn?.addEventListener('click', function () {

  if (userMenu?.classList.contains('show-menu')) {
    userMenu?.classList.remove('show-menu')
  } else {
    userMenu?.classList.add('show-menu')
  }

})


window.addEventListener('mouseover', function (e: MouseEvent) {

  const dim = userMenu.getBoundingClientRect();

  let left = dim.left;
  let right = dim.right;
  let bottom = dim.bottom;
  if ((e.pageX < left) || (e.pageX > right) || (e.pageY > bottom)) {
    userMenu?.classList.remove('show-menu')
  }

});