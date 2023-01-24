import axios from "axios"

const API_URL = "http://localhost:8000";

const register = async (userData) => {

  try {
    
    const res = await axios.post(API_URL + "/users/createUser", userData);
    return res.data;
    
  } catch (error) {
    
  }

}

const login = async (user) => {

  const res = await axios.post(API_URL + '/users/login', user)

  if (res.data) {

      localStorage.setItem("user", JSON.stringify(res.data));

  }

  return res.data

}

const authService = {
  register,
  login
};

export default authService;
