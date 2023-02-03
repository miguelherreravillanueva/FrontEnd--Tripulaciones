import axios from "axios"

const API_URL = "http://localhost:8000";
const user = JSON.parse(localStorage.getItem("user"));

const getAll = async () => {

    const res = await axios.get(API_URL + "/requests/getAll");
    return res.data
    
}

const createRequest = async (test) => {

        const res = await axios.post(API_URL + "/requests/createRequest/" + test.id, test.requestCreated, {

            headers: {

                authorization: user.token,

            },

        });
        console.log(res.data)
        return res.data;
   
}


const requestService = {
    getAll,
    createRequest
};

export default requestService;