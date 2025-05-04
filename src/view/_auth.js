const displayLogin = function (userSignIn) {
  return `<section id="authentication" class="section-auth">
        <!-- Navigation to the source img -->
        <!-- Rename image -->
  
        <img
          src="./img/desserts2.jpg"
          alt="restaurant image with tables"
          class="section-auth-img"/>

        <div class="section-auth-content">
          <h1 class="text-align-center">Welcome to Wase Lounge</h1>
          <p class="text-align-center">Please sign in to continue</p>

          <div class="section-auth-controls">
            <div class="section-auth-controls-buttons">
               <button type="button" class="${
                 userSignIn ? "active-auth" : ""
               }">Sign In</button>
              <button type="button" class="${
                userSignIn ? "" : "active-auth"
              }">Sign Up</button>
            </div>
            <hr/>
          </div>
            <form class="section-auth-form">
              <div class="group-input">
                <label for="email">Email Address</label>
                <input type="email" placeholder="Enter Your Email" id="email" />
              </div>

              <div class="group-input">
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Passwrd"
                  id="password"
                />
              </div>
               <div class="group-input ${userSignIn ? "hidden" : ""}">
                <label for="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Your Passwrd"
                  id="confirm_password"
                />
              </div>

              <div class="section-auth-form-captcha">
                <div>
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
                </div>
                <span>Forget Password</span>
              </div>

              <button class="btn" id="auth-button">${
                userSignIn ? "Login" : "Sign Up"
              }</button>
            </form>
          
        </div>
    
    </section>`;
};

export default displayLogin;
