import axios from "axios"

const API_URL = "http://localhost:8000";

const getAllNews = async() =>{
  const res = await axios.get(API_URL + "/news/getAll", );
  return res.data
}


const newService = {
    getAllNews
  };

export default newService;