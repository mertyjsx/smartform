import { getToken } from "./user.service";
import axios from "axios"




export const getAll=()=>{
  const apiUrl = global.config.apiBaseURL.url;

 return axios.get(apiUrl + "user/show_details", {
    headers:  {
      "Authorization": "Bearer "+getToken(),
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })

}


export const getPublic=()=>{
  const apiUrl = global.config.apiBaseURL.url;

 return axios.get(apiUrl + "user/public_data", {
    headers:  {
      "Authorization": "Bearer "+getToken(),
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })

}






export const getEducation=()=>{
  const apiUrl = global.config.apiBaseURL.url;

 return axios.get(apiUrl + "user/show_details?form_name=education", {
    headers:  {
      "Authorization": "Bearer "+getToken(),
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })

}

export const getPersonal=()=>{
    const apiUrl = global.config.apiBaseURL.url;
  
   return axios.get(apiUrl + "user/show_details?form_name=personal", {
      headers:  {
        "Authorization": "Bearer "+getToken(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  
  }







export const getInterest=()=>{
    const apiUrl = global.config.apiBaseURL.url;
  
   return axios.get(apiUrl + "user/show_details?form_name=interest", {
      headers:  {
        "Authorization": "Bearer "+getToken(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  
  }

  export const getCertification=()=>{
    const apiUrl = global.config.apiBaseURL.url;
  
   return axios.get(apiUrl + "user/show_details?form_name=certificate", {
      headers:  {
        "Authorization": "Bearer "+getToken(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  
  }

  export const getSkill=()=>{
    const apiUrl = global.config.apiBaseURL.url;
  
   return axios.get(apiUrl + "user/show_details?form_name=skill", {
      headers:  {
        "Authorization": "Bearer "+getToken(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  
  }
  export const getProject=()=>{
    const apiUrl = global.config.apiBaseURL.url;
  
   return axios.get(apiUrl + "user/show_details?form_name=project", {
      headers:  {
        "Authorization": "Bearer "+getToken(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  
  }







export const getExperience=()=>{
    const apiUrl = global.config.apiBaseURL.url;
  
   return axios.get(apiUrl + "user/show_details?form_name=experience", {
      headers:  {
        "Authorization": "Bearer "+getToken(),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  
  }
  