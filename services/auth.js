const loginService = async () => {
  console.log("login called");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("waitin to return login");
  return true;
};

const signUpService = async () => {
  console.log("SignUp called");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("waitin to return signUp");
  return true;
};

export { loginService, signUpService };
