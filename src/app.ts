
import { userDetails } from './components/userDetails';
import './controllers/login';
import './controllers/router';
import { navigateTo, router } from './controllers/router';
import './controllers/saveToLocalStorage';
import './controllers/sidebar';
import { defaultUser } from './data/defaultUser';
import { TUser } from './types/TUser';
import fetchData from './util/fetchData';

import { getFromLocalStorage } from './controllers/getFromLocalStorage';
import './controllers/logoutUser';
import { TUserCredentials } from './types/TUserCredentials';




//href=${`users/${id}`}
//fetch data locally
export const URL = 'http://localhost:5500/src/data/employees.json'
const data: TUser[] = await fetchData(URL)


//
const employeeContainerGrid = document.querySelector('.employee-grid') as HTMLElement
const employeeContainerList = document.querySelector('.employee-list') as HTMLElement
const listViewContainer = document.querySelector('.employee-list-view') as HTMLElement
const titleContainer = document.querySelector('.section-title p') as HTMLElement

//navigate to home page logo is click
document.querySelector('.logo')?.addEventListener('click', function () {
  location.href = '/'
})

//set nav user image and name
const navUser = document.querySelector('.user-icon')


if (navUser) {
  const user = getFromLocalStorage('userDB').find((user) => user.isLoggedIn) as TUserCredentials

  if (user) {
    const dbUser = data.find((item) => item._id === user.id) as TUser

    navUser.innerHTML = `
        <img src=${dbUser?.user_avatar ?? './src/assets/Unknown.png'} alt="image" class="profile-image">
            <p class="username">${dbUser?.first_name ?? 'GUEST'}</p>
            <p class="username">${dbUser?.last_name ?? 'USER'}</p>
            `
  }
}


//navigate to home page when address book link is clicked
document.querySelector('.address-book')?.addEventListener('click', function () {
  location.href = '/'
})


const employeesGrid = data.map((emp) => {
  const { _id: id, first_name, last_name, user_avatar, department, room } = emp;
  if (titleContainer) {
    titleContainer.textContent = `${data.length} employees displayed`
  }
  return `    <!--Single  employee-->
        <a href=${`/users/${id}`} class="single-employee" data-id="link">
          <div class="person">
            <img src=${user_avatar} alt="" class="person-image">
         
           <div class="personal-data">
            <p>${first_name}</p>
             <p>${last_name}</p>
            </div>
          </div>
          <div class="location-data">
           <div class="department-data">
            <i class="fa  fa-briefcase"></i>
            <p>${department}</p>
            </div>
             <div class=room-data>
            <i class="fa  fa-briefcase"></i>
            <p>${room}</p>
            </div>
          </div>
        </a>`
}).join('')


if (employeeContainerGrid) {
  employeeContainerGrid.innerHTML = employeesGrid
}



const employeesList = data.map((emp) => {
  const { _id: id, first_name, last_name, user_avatar, department, room } = emp;
  if (titleContainer) {
    titleContainer.textContent = `${data.length} employees displayed`
  }
  return `    <!--Single  employee-->
        <a href=${`/users/${id}`} class="single-employee-list" data-id="link">
           <div class="image-container-list"> 
           <img src=${user_avatar} alt="" class="person-image-list">
           </div>
            <div class="name-container-list"><p>${first_name + " " + last_name}</p></div>
           <div class="department-data-list">
            <i class="fa  fa-briefcase"></i>
            <p>${department}</p>
            </div>
             <div class="room-container-list">
            <i class="fa  fa-briefcase"></i>
            <p>${room}</p>
            </div>
          </div>
        </a>`
}).join('')


if (employeeContainerList) {
  employeeContainerList.innerHTML = employeesList
}


//handle basic and advance search toggle
const toggleBtns = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>


toggleBtns.forEach((btn) => {

  btn.addEventListener('click', function () {
    if (!btn.classList.contains('active')) {
      btn.classList.add('active')
    }
    if (btn.dataset.id !== 'basic') {
      advanceForm.style.display = 'flex'
      basicForm.style.display = 'none'
    } else {
      advanceForm.style.display = 'none'
      basicForm.style.display = 'flex'
    }

    toggleBtns.forEach((item) => {
      if (btn !== item) {
        item.classList.remove('active')
      }
    })
  })
})

//form search
const basicForm = document.querySelector('.basic-search-container') as HTMLFormElement
if (basicForm) {
  basicForm.addEventListener('submit', e => {

    if (e.target instanceof HTMLFormElement) {


      e.preventDefault()
      const formData = new FormData(e.target)
      const { searchItem } = Object.fromEntries(formData)


      const response = data.find((item) => {
        const fullName = item.first_name + " " + item.last_name;

        if (item._id === parseInt(searchItem as string)) {
          return item;
        } else if (item.first_name.toLowerCase() === searchItem || item.first_name === searchItem) {
          return item;
        } else if (item.last_name.toLowerCase() === searchItem || item.last_name === searchItem) {
          return item
        } else if (fullName.toLocaleLowerCase() === searchItem || fullName === searchItem) {
          return item
        }
      })


      if (response) {

        //set title and number of data display
        titleContainer.textContent = `${1} employees displayed`

        const { _id, first_name, last_name, user_avatar, department, room } = response;
        employeeContainerGrid.innerHTML = `    <!--Single  employee-->
        <a href=${`/users/${_id}`} class="single-employee" data-id="link">
          <div class="person">
            <img src=${user_avatar} alt="" class="person-image">
           <div class="personal-data">
            <p>${first_name}</p>
             <p>${last_name}</p>
            </div>
          </div>
          <div class="location-data">
           <div class="department-data">
            <i class="fa  fa-briefcase"></i>
            <p>${department}</p>
            </div>
             <div class=room-data>
            <i class="fa  fa-briefcase"></i>
            <p>${room}</p>
            </div>
          </div>
        </a>`

        document.querySelector('.single-employee')?.addEventListener('click', function (event) {
          if (event.currentTarget instanceof HTMLElement) {
            event.preventDefault()
            navigateTo(event.currentTarget.getAttribute('href') ?? '')
          }

          const view = router()

          const userId = view.result !== null ? view.result[1] : '0'
          const user = data.find((item) => item._id === parseInt(userId))

          const app = document.getElementById('app') as HTMLElement
          app.innerHTML = userDetails(user ?? defaultUser)

        })
      } else {
        //set title and number of data display
        titleContainer.textContent = ``

        employeeContainerGrid.innerHTML = `
              <div class="not_found">
              <p>Could not found any record match the search criteria</p>
            </div>`

      }

      if (response) {

        //set title and number of data display
        titleContainer.textContent = `${1} employee(s) displayed`


        const { _id, first_name, last_name, user_avatar, department, room } = response;

        employeeContainerList.innerHTML = `    <!--Single  employee-->
        <a href=${`/users/${_id}`} class="single-employee-list" data-id="link">
           <div class="image-container-list"> 
           <img src=${user_avatar} alt="" class="person-image-list">
           </div>
            <div class="name-container-list"><p>${first_name + " " + last_name}</p></div>
           <div class="department-data-list">
            <i class="fa  fa-briefcase"></i>
            <p>${department}</p>
            </div>
             <div class="room-container-list">
            <i class="fa  fa-briefcase"></i>
            <p>${room}</p>
            </div>
          </div>
        </a>`

        document.querySelector('.single-employee-list')?.addEventListener('click', function (event) {

          if (event.currentTarget instanceof HTMLElement) {
            event.preventDefault()
            navigateTo(event.currentTarget.getAttribute('href') ?? '')
          }

          const view = router()
          const userId = view.result !== null ? view.result[1] : '0'
          const user = data.find((item) => item._id === parseInt(userId))

          const app = document.getElementById('app') as HTMLElement
          app.innerHTML = userDetails(user ? user : defaultUser)

        })
      } else {

        //set title and number of data display
        titleContainer.textContent = ``
        listViewContainer.innerHTML = `
              <div class="not_found">
             <p>Could not found any record match the search criteria</p>
            </div>`
      }
    }
  })
}

// Handle clicks on links to avoid page reload
export const handleLinkClick = async () => {

  const data: TUser[] = await fetchData(URL)
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      if (event.currentTarget instanceof HTMLAnchorElement) {
        //prevent default behaviour of anchor tags
        event.preventDefault();

        //get the url
        const url = event.currentTarget.getAttribute('href') as string

        //add to push state
        navigateTo(url)

        //get the router object
        const view = router()


        //user details route s
        if (view?.route.path === '/users/:id') {

          const userId = view.result !== null ? view.result[1] : '0'
          const user = data.find((item) => item._id === parseInt(userId))

          const app = document.getElementById('app') as HTMLElement
          app.innerHTML = view.route.view;

          const singleUSer: HTMLElement | null = document.querySelector('.single-user-container')
          if (singleUSer !== null) {
            singleUSer.innerHTML = userDetails(user ?? defaultUser)
          }

          //navigate to previous page
          document.querySelector('.previous-btn')?.addEventListener('click', function () {

            history.back()
          })
        } else {

        }
      }
    });
  });

}
handleLinkClick()

//handle form basic search
const advanceForm = document.querySelector('.advance-search-container') as HTMLElement

if (advanceForm) {
  advanceForm.addEventListener('submit', function (e) {
    if (e.target instanceof HTMLFormElement) {
      e.preventDefault()
      const formData = new FormData(e.target)
      const searchData = Object.fromEntries(formData)
      const name = searchData.name as string
      const email = searchData.email as string
      const skypeId = searchData.skypeId as string
      const building = searchData.building as string
      const room = searchData.room as string
      const telephone = searchData.telephone as string


      const response = data.find((person) => {
        const fullName = person.first_name + " " + person.last_name;

        if (name.toLocaleLowerCase() === fullName.toLocaleLowerCase() && person.email.toLocaleLowerCase() === email.toLocaleLowerCase() && person.skype.toLocaleLowerCase() === skypeId.toLocaleLowerCase() && person.building.toLocaleLowerCase() === building.toLocaleLowerCase() && person.room === room && person.phone.substring(1, person.phone.length) === telephone) {
          return person;
        }
      })



      if (response) {
        //set title and number of data display
        if (titleContainer) {
          titleContainer.textContent = `${1} employees displayed`
        }

        const { _id, first_name, last_name, user_avatar, department, room } = response;
        employeeContainerGrid.innerHTML = `    <!--Single  employee-->
        <a href=${`/users/${_id}`} class="single-employee" data-id="link">
          <div class="person">
            <img src=${user_avatar} alt="" class="person-image">
           <div class="personal-data">
            <p>${first_name}</p>
             <p>${last_name}</p>
            </div>
          </div>
          <div class="location-data">
           <div class="department-data">
            <i class="fa  fa-briefcase"></i>
            <p>${department}</p>
            </div>
             <div class=room-data>
            <i class="fa  fa-briefcase"></i>
            <p>${room}</p>
            </div>
          </div>
        </a>`
      } else {
        //set title and number of data display
        //titleContainer.textContent = ``
        employeeContainerGrid.innerHTML = `
              <div class="not_found">
             
              <p>Could not retrieve record</p>
            </div>`

      }

      if (response) {

        //set title and number of data display
        if (titleContainer) {
          titleContainer.textContent = `${1} employee(s) displayed`
        }


        const { _id, first_name, last_name, user_avatar, department, room } = response;

        employeeContainerList.innerHTML = `    <!--Single  employee-->
        <a href=${`/users/${_id}`} class="single-employee-list" data-id="link">
           <div class="image-container-list"> 
           <img src=${user_avatar} alt="" class="person-image-list">
           </div>
            <div class="name-container-list"><p>${first_name + " " + last_name}</p></div>
           <div class="department-data-list">
            <i class="fa  fa-briefcase"></i>
            <p>${department}</p>
            </div>
             <div class="room-container-list">
            <i class="fa  fa-briefcase"></i>
            <p>${room}</p>
            </div>
          </div>
        </a>`
      } else {
        //set title and number of data display
        //titleContainer.textContent = ``
        employeeContainerList.innerHTML = `
              <div class="not_found">
          
              <p>Could not retrieve record</p>
            </div>`
      }
    }

  })
}

//toggle layout functionality
const listBtn = document.querySelector('.list-btn') as HTMLElement
const gridBtn = document.querySelector('.grid-btn') as HTMLElement


if (listBtn) {
  //handle click event for list view
  listBtn.addEventListener('click', function () {

    if (!listBtn.classList.contains('show-container')) {
      listViewContainer.classList.add('show-container')
      employeeContainerGrid.classList.remove('show-container')
      listBtn.classList.add('active')
      gridBtn.classList.remove('active')
    }
  }
  )
}

if (gridBtn) {
  //handle click event for grid view
  gridBtn.addEventListener('click', function () {
    if (!gridBtn.classList.contains('active')) {
      employeeContainerGrid.classList.add('show-container')
      listViewContainer.classList.remove('show-container')
      gridBtn.classList.add('active')
      listBtn.classList.remove('active')
    }
  }
  )
}



//sidebar functionality
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


