export function homeView() {
  const div = document.createElement('div')
  div.className = "main"
  div.innerHTML = `<div class="overlay">
</div>
  <aside class="sidebar-container">
    <div class="sidebar">
      <div class="sidebar-menu">
        <div class="user-content" data.id="link">
          <img src="./src/assets/img-1.jpeg" alt="image" class="sidebar-image">
          <div class="user-info">
            <a href="users/1" class="username-link">Luffy Monkey</a>
            <a href="" class="signout-btn">Sign out</a>
            </dv>
          </div>
        </div>
        <div href="/" class="address-menu" data-id="link">
          <a href="/" data-id="link" class="address-book"><span>Address Book</span></a>
        </div>
        <div class="support">
          <div class="sidebar-support-container">
            <i class="fa fa-question-circle"></i>
            <button class="support-btn"><span>support</span></button>
          </div>
        </div>
      </div>
    </div>
  </aside>
<div class="data-content">
  <section class="search-section">

    <div class="btns">
      <button class="basic-search-btn btn active" data-id="basic"><span>Basic search</span></button>
      <button class="advance-search-btn btn" data-id="advance"><span>advance search</span></button>
    </div>

    <form class="basic-search-container">
      <div class="search-content">
        <span><i class="fa fa-search"></i></span>
        <input type="search" name="searchItem" id="basic" placeholder="Mike Oppong">
      </div>
      <button class="search-btn"><span>search</span></button>
    </form>

    <form class="advance-search-container">
      <div class="advance-content">
        <div class="s-name">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Mike Oppong">
        </div>
        <div class="s-email">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="mikel.oppon@gmail.com">
        </div>
        <div class="contact">
          <div>
            <label for="phone">Phone</label>
            <input type="text" name="telephone" id="phone" placeholder="739593752">
          </div>
          <div>
            <label for="skype">skype</label>
            <input type="text" name="skypeId" id="skype" placeholder="opp.mic">
          </div>
        </div>
        <div class="location">
          <div class="building-select">
            <label for="building">Building</label>
            <div class="building-input">
              <input type="text" name="building" id="" placeholder="Any">
              <i class="fa  fa-chevron-down"></i>
            </div>
          </div>
          <div class="room-search">
            <label for="room">Room</label>
            <input type="text" name="room" id="room">
          </div>
        </div>
        <div class="department">
          <label for="department">Department</label>
          <div class="department-input">
            <input type="text" name="department" id="department" placeholder="Any">
            <i class="fa  fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <button class="search-btn"><span>search</span></button>
    </form>
  </section>
  <section class="employees">
    <div class="section-title">
      <p></p>
      <div class="layout">
        <button class="grid-btn active"><i class="fa fa-table"></i></button>
        <button class="list-btn"><i class="fa fa-list"></i></button>
      </div>
    </div>
    <div class="employee-grid show-container">

    </div>
    <div class="employee-list-view">

      <div class="list-header">
         <div class="photo-container">
                  <i class="fa fa-circle"></i>
                  <p>photo</p>
                </div>
                <div class="name-container">
                  <i class="fa fa-user"></i>
                  <p>Name</p>
                </div>
                <div class="dept-container">
                  <i class="fa fa-briefcase"></i>
                  <p>Department</p>
                </div>
                <div class="room-container">
                  <i class="fa fa-tag"></i>
                  <p>Room</p>
                </div>
      </div>
      <div class='employee-list'>

      </div>

    </div>
  </section>
</div>`
  return div;
}


