

export const signUpUser = function (email, password, reTypedPassword) {
  if (!email || !password || !reTypedPassword)
    return alert("Fill all the fields");

  if (password !== reTypedPassword) return alert("Passwords are not the same");

  //6) as explained in controller.js, the function will now
  //  create a new user with the data you provided and
  //  now will return it

  const user = {
    email,
    password,
  };
  return user;
};



