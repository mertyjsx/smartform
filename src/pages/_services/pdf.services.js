
import { getToken } from "./user.service";
import axios from "axios"




export const getPublic=()=>{
    const apiUrl = global.config.apiBaseURL.url;
  console.log(getToken())
   return axios.get(apiUrl + "user/public_data", {
      headers:  {
        "Authorization": "Bearer "+getToken(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  
  }
  