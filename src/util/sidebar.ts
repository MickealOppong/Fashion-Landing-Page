import { navData } from "./data"

let sidebarContainer = document.querySelector('.sidebar-container') as HTMLDivElement

let sidebar = document.querySelector('.sidebar') as HTMLDivElement

let closeBtn = document.querySelector('.closeBtn-container') as HTMLElement
let hamburgerBtn = document.querySelector('.hamburgerBtn') as HTMLElement


//open sidebar
hamburgerBtn.addEventListener('click', function () {
  sidebarContainer.classList.add('show')
  if (sidebarContainer.classList.contains('hide')) {
    sidebarContainer.classList.remove('hide')
  }
}
)

//hide sidebar
closeBtn.addEventListener('click', function () {
  sidebarContainer.classList.add('hide')
  if (sidebarContainer.classList.contains('show')) {
    sidebarContainer.classList.remove('show')
  }
}
)

//handle sidebar menu
const ul = document.createElement('ul');

let sidebarItems = navData.map((item, index) => {

  return ` <li class="sidebar-link">
            <div class="menu">
            <a  href=${item.url} target="_blank" class="nav-link">${item.title}
            </a>
            <button class="toggle-btn"> <i class="la la-angle-right"></i></button>
            </div>
            <div class="child-menu-container">
            <ul class="child-menu">
           ${item.menu?.map((link) => {
    return `<li class="child-menu-link">  <a  href="" target="_blank" >${link}</a></li>`
  }).join('')}
            </ul>
            </div>
            </li>`
}).join('')
ul.innerHTML = sidebarItems;

sidebar.append(ul);

const toggleBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.toggle-btn')

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const elem = e.currentTarget;
    if (elem instanceof Element) {
      const parent = elem.parentElement;
      const childMenu = parent?.nextElementSibling;

      let childMenuHeight = childMenu?.getBoundingClientRect().height;
      let childrenElemContainerHeight = childMenu?.firstElementChild?.getBoundingClientRect().height;
      if (childMenu instanceof HTMLElement) {
        if (childMenuHeight === 0) {
          childMenu.style.height = `${childrenElemContainerHeight}px`
        } else {
          childMenu.style.height = `${0}px`
        }
      }

    }

  })
})