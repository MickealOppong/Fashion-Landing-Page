export function registerView() {
  const div = document.createElement('div')
  div.className = 'register-container'
  div.innerHTML = `
  <div class="register" method="post">
   <div class="register-title">
    <h2>Register for LeverX account</h2>
  </div>
    <form class="register-form">
    <div class="email-container">
      <label for="email">Email</label>
      <input type="email" name="email" id="email">
    </div>
    <div class="password-container">
      <label for="password">Password</label>
      <input type="password" name="password" id="password">
    </div>
    <button class="submit-btn"><span>submit</span></button>
  </form>
  </div>
  `
  return div
}