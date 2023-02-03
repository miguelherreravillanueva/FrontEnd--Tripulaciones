import axios from "axios"

const API_URL = "http://localhost:8000";

const getAllActivities = async() =>{
  const res = await axios.get(API_URL + "/activities/getAllActivities/", );
  return res.data
}
const getActivityById = async(id)=>{
  const res = await axios.get (API_URL + "/activities/getActivityById/ " + id );
  return res.data
}


 
const activityService = {
    getAllActivities,
    getActivityById
  };

export default activityService; 