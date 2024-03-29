import axios from "axios";
const apiEndPt = "http://10.0.2.2:3000/api";

const loginService = async (reqData) => {
  const loginResp = await axios
    .post(`${apiEndPt}/login`, reqData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return loginResp;
};

const signUpService = async (reqData) => {
  const signUpResp = await axios
    .post(`${apiEndPt}/signup`, reqData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return signUpResp;
};

export { loginService, signUpService };
