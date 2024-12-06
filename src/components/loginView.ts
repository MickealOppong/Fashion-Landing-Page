export function loginView() {
  const div = document.createElement('div')
  div.className = 'login-container'
  div.innerHTML = `
  <div class="login">
  <div class="login-title">
    <h2>Login to LeverX account</h2>
  </div>
    <form class="login-form">
    <div class="email-container">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" value="luffy.monkey@leverx.com">
    </div>
    <div class="password-container">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" value="password"/>
    </div>
    <div class="remember-container">
     <label for="remember-me">Remember me</label>
    <input type="checkbox" name="rememberMe" id="remember-me" class="remember-me">
    </div>
    <button class="submit-btn"><span>LOGIN</span></button>
  </form>
  <div class="register-link">
  <button class="register-btn"><span>sign up</span></button>
  </div>
  </div>
  `
  return div
}