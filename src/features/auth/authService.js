import axios from "axios"

const API_URL = "http://localhost:8000";

const register = async (userData) => {

  try {
    
    const res = await axios.post(API_URL + "/users/createUser", userData);
    return res.data;
    
  } catch (error) {
    
  }

};

const authService = {
  register,
};

export default authService;
