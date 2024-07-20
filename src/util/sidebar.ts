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
  console.log('ll');

}
)
