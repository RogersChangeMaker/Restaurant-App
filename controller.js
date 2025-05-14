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

const handleSignIn = (email, password) => {
  // console.log
  // (users.find(user => user.email === email && user.password === password));

  // this function displays the landing view (second page)
  displayScreen(landingView());
};

//5) The handleSignUp will now call the signUser in the userModel.js file
const handleSignup = function (email, password, confirm_password) {
  //7) the returned value will be pushed
  const data = signUpUser(email, password, confirm_password);
  if (!data) return console.log("Invalid Data");

  users.push(data);
  localStorage.setItem("userdata", JSON.stringify([...users]));
};

// this function will help us retrive data from local storage
const getInitialUsers = () => {
  // to format this data to an object, we add the JSON.parse
  // putting the data into an array
  const data = JSON.parse(localStorage.getItem("userdata"));
  // Guard condition
  if (!data) return;
  users.push(...data);
  console.log(users);
};

// this function will run at the start of our array
const init = function () {
  displayScreen(displayLogin(isSignIn));
  getInitialUsers();
};

const renderLoading = function(element){
  element.innerHTML = 'Loading ...'
}

const renderRecipe = function(element, img, description){
  
  // WE NEED TO DESTRUCTURE THE INGREDIENT
  const ingredients = description.map(des => Object.values(des)).map(des => des.join(' '))

   element.innerHTML = `<img src=${img} class="main-image">

    <div class="description">
    <h1>Recipe</h1>
    <pre>${ingredients.join('\n')}</pre>
    </div>`;
    // THE \n MEANS THAT AFTER PRINTING ONE LINE IT GOES TO THE NEXT LINE
}
 

init();

// this entire block of document listener is to handle signin and signup
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


// we shall crete a 2nd document eventListener for the landing page
document.addEventListener("click", async function (e) {

  const main = document.querySelector('.main-land')


  // this if is to check if you are clicking on search button
  if (e.target.classList.contains("search-button")) {
    const searchItem = e.target.previousElementSibling.value;
    // THE e IS THE SEARCH IMPUT WHILE THE PREVIOUS ELEMENT IS
    // THE SEARCH INPUT

    if (!searchItem) return alert("Enter Item to Search");

    try{
      renderLoading(main)
      // const res = await fetch(
      //   `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=3d99a6ae-b1e4-4b0a-9732-7d8807904cc1`
      // );

      renderLoading(main);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e868f`
      );

      

      const dataRes = await res.json();
      const recipeData = dataRes.data.recipe;

      console.log(recipeData);
// THIS IMAGE_URL AND INGREDIENTS ARE THE WAY THEY APPEAR IN THE CONSILE OF THE WEBPAGE FOR THAT PARTICULAR RECIPE
      renderRecipe(main,recipeData.image_url,recipeData.ingredients)

    } 
    catch (error) {
      alert(error)

    }

  }
});
