import { TUser } from "../types/TUser";

//view for user details
export function userDetails(user: TUser) {
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return ` <div class="single-user-details">
   <div class="previous-btn-container"> 
   <a href="/" class="previous-btn"><i class="fa fa-chevron-left"></i></a>
   </div>
    <div class="image-container">
      <img src=${user.user_avatar} alt="">
        <div class="profile-name">
          <h4>${user.first_name + " " + user.middle_native_name + " " + user.last_name}</h4>
          <p>${user.first_name + " " + user.middle_native_name + " " + user.last_name}</p>
        </div>
        <div class="profile-btns">
          <button class="copy-btn">copy</button>
          <button class="edit-btn">edit</button>
        </div>
    </div>
    <div class="user-details">
      <div class="general-info">
        <div class="title-container">
          <p>General info</p>
        </div>
        <div class="content">
          <div class="single-item">
            <div class="label">
              <i class="fa fa-briefcase"></i>
              <p>department</p>
            </div>
            <p>${user.department}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <i class="fa fa-building"></i>
              <p>Building</p>
            </div>
            <p>${user.building}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <i class="fa fa-hashtag"></i>
              <p>Room</p>
            </div>
            <p>${user.room}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <i class="fa fa-hashtag"></i>
              <p>Desk number</p>
            </div>
            <p>${user.desk_number}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <i class="fa fa-calendar"></i>
              <p>Date of birth</p>
            </div>
            <p>${user.date_birth.day + " " + MONTHS[user.date_birth.month - 1] + " " + user.date_birth.year}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <i class="fa fa-user"></i>
              <p>Manager</p>
            </div>
            <p>${user.manager.first_name + " " + user.manager.last_name}</p>
          </div>
        </div>
      </div>
      <div class="contact-info">
        <div class="title-container">
          <p>Contact</p>
        </div>
        <div class="content">
          <div class="single-item">
            <div class="label">
              <i class="fa fa-phone"></i>
              <p>Mobile phone</p>
            </div>
            <p>${user.phone}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <i class="fa fa-envelope"></i>
              <p>Email</p>
            </div>
            <p>${user.email}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <i class="fa fa-skype"></i>
              <p>Skype</p>
            </div>
            <p>${user.skype}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <p class="c-number"><span>C</span></p>
              <p>C-number</p>
            </div>
            <p>${user.cnumber}</p>
          </div>
        </div>
      </div>
      <div class="travel-info">
        <div class="title-container">
          <p>Travel Info</p>
        </div>
        <div class="content">
          <div class="single-item">
            <div class="label">
              <i class="fa fa-globe"></i>
              <p>Citizenship</p>
            </div>
            <p>${user.citizenship}</p>
          </div>
          ${user.visa.map((item, index) => {
    return `  <div class="single-item">
            <div class="label">
           <p class="c-number"><span>V</span></p>
              <p>Visa 1</p>
            </div>
            <p>${item.type + "(" + item.issuing_country + ")"}</p>
          </div>
          <div class="single-item">
            <div class="label">
              <i class="fa fa-calendar"></i>
              <p>Visa ${index + 1} validity period</p>
            </div>
            <p>${new Date(item.end_date).toDateString()}</p>
          </div>`
  })}
        </div>
      </div>
    </div>
  </div>`
}