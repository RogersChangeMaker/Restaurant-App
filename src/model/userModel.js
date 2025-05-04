

export const signUpUser = function (email, password, reTypedPassword) {
  if (!email || !password || !reTypedPassword)
    return alert("Fill all the fields");
  const user = {
    email,
    password,
  };
  return user;
};

export const signIn = function(){
  console.log("signIn Model");
}

