import { signUpUser } from "./src/model/userModel.js";
import displayLogin from "./src/view/_authView.js";
import { landingView } from "./src/view/landingView.js";

const containerEl = document.querySelector(".container");
let inputEmail;
let inputPassword;
let inputConfirmPassword;

let isSignIn = true;
const users = [];

const displayScreen = (receivedScreen) => {
  containerEl.innerHTML = receivedScreen;
};

const handleAuthButton = () => {
  isSignIn = !isSignIn;
  displayScreen(displayLogin(isSignIn));
};

const handleSignIn = (email,password) =>{
  console.log
  (users.find(user => user.email === email && user.password === password));

  // this function displays the landing view (second page)
  displayScreen(landingView());
}



//5) The handleSignUp will now call the signUser in the userModel.js file
const handleSignup = function (email, password, confirm_password) {
  //7) the returned value will be pushed
  const data = signUpUser(email, password, confirm_password);
  if (!data) return console.log("Invalid Data");
  
  users.push(data);
  localStorage.setItem("userdata", JSON.stringify([...users ]));
};

// this function will help us retrive data from local storage
const getInitialData = ()=>{
  // to format this data to an object, we add the JSON.parse
  // putting the data into an array
  users.push(...JSON.parse(localStorage.getItem("userdata")));
  console.log(users);
}

// this function will run at the start of our array
const init = function () {
  displayScreen(displayLogin(isSignIn));
  getInitialData();
};

init();

document.addEventListener("click", function (e) {
  //1) this first button represents the signin and signup buttons that will display the view you want
  if (
    e.target.type === "button" &&
    e.target.parentElement.classList.contains("section-auth-controls-buttons")
  ) {
    e.preventDefault();
    handleAuthButton();
  }

  // 2) This button repesents the one that will submit either the login or signup form
  if (e.target.id === "auth-button") {
    e.preventDefault();
    inputEmail = document.getElementById("email");
    inputPassword = document.getElementById("password");
    inputConfirmPassword = document.getElementById("confirm_password");

    //3) if user is on signin view the button will attempt to sign in
    if (isSignIn) {
      e.preventDefault();
      handleSignIn(inputEmail.value, inputPassword.value);
      return;
    }
    // 4) Else the button will try to signup
    // And when you try to signup the data is apssed to the handleSignUp function(found at the top and bottom of this page)
    else {
      handleSignup(
        inputEmail.value,
        inputPassword.value,
        inputConfirmPassword.value
      );
    }
  }
});
