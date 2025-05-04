// import createUser from "./src/model/userModael.js";
import { signUpUser } from "./src/model/userModel.js";
import displayLogin from "./src/view/_auth.js";

const containerEl = document.querySelector(".container");

let isSignIn = true;

const displayScreen = function (receivedScreen) {
  containerEl.innerHTML = receivedScreen;
};

const handleAuthButton = function () {
  isSignIn = !isSignIn;
  displayScreen(displayLogin(isSignIn));
};
const init = function () {
  displayScreen(displayLogin(isSignIn));
};

init();

document.addEventListener("click", function (e) {
  e.preventDefault()

  if (
    e.target.type === "button" &&
    e.target.parentElement.classList.contains("section-auth-controls-buttons")
  ) {
    handleAuthButton();
  }

  if(e.target.id === "auth-button" && isSignIn){
    console.log("User is trying to signin");
    return;
  }
  if (e.target.id === "auth-button" && !isSignIn){
    console.log("User is trying to signup");
  }
});
