import axios from "axios";
const URL = "http://localhost:8080/auth/";

export const validateRegister = async ({values,action}) => {
  let path;
  console.log(action);
  if(action==="Login") path="login";
  else path="register";
  try {
    const response = await axios.post(`${URL}${path}`, values);
    return response;
  } catch (err) {
    console.error("Error occurred during registration:", err);
    return { error: err.message };
  }
};
