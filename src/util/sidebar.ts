let sidebarContainer = document.querySelector('.sidebar-container') as HTMLDivElement

let sidebar = document.querySelector('.sidebar') as HTMLDivElement

let closeBtn = document.querySelector('.closeBtn-container') as HTMLElement
let hamburgerBtn = document.querySelector('.hamburgerBtn') as HTMLElement


//functions
closeBtn.addEventListener('click', function () {
  if (sidebarContainer.classList.contains('show')) {
    sidebarContainer.classList.remove('hide')
  }
}
)


hamburgerBtn.addEventListener('click', function () {
  sidebarContainer.classList.add('show')
}
)
