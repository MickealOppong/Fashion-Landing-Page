const hamburgerBtn = document.querySelector('.hamburger-btn') as HTMLElement
const closeBtn = document.querySelector('.close-btn') as HTMLElement
const sidebar = document.querySelector('.sidebar-container') as HTMLElement
const overlay = document.querySelector('.overlay') as HTMLElement
const nav = document.querySelector('nav') as HTMLElement


//show or hide hamburger button to open sidebar
hamburgerBtn.addEventListener('click', function () {
  closeBtn.classList.add('active')
  hamburgerBtn.classList.add('active')
  sidebar.classList.add('open')
  overlay.classList.add('active')
  sidebar.style.transform = `translateX(${0}%)`
  nav.classList.add('active')
})


//close button to hide sidebar
closeBtn.addEventListener('click', function () {
  closeBtn.classList.remove('active')
  hamburgerBtn.classList.remove('active')
  sidebar.style.transform = `translateX(${-100}%)`
  overlay.classList.remove('active')
  nav.classList.remove('active')
})

//user name link click
document.querySelector('.username-link')?.addEventListener('click', function () {
  hamburgerBtn.classList.remove('active')
  closeBtn.classList.remove('active')
  sidebar.style.transform = `translateX(${-100}%)`
  overlay.classList.remove('active')
  nav.classList.remove('active')
})
