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
            <a  href=${item.url} target="_blank" class="nav-link">${item.title}</a>
            <i class="la la-angle-right"></i>
            <div>
            <ul>
           ${item.menu?.map((link) => {
    return `<li>${link}</li>`
  }).join('')}
            </ul>
            </div>
            </li>`
}).join('')
ul.innerHTML = sidebarItems;

sidebar.append(ul);

