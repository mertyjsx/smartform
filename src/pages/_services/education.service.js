import { getToken } from "./user.service";
import axios from "axios"




export const getEducation=()=>{
  const apiUrl = global.config.apiBaseURL.url;

 return axios.get(apiUrl + "user/show_details?form_name=education", {
    headers:  {
      "Authorization": "Bearer "+getToken(),
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })

}












// USING METHOD TO SUBMIT USER PERSONAL DATA
export const profileEducationData = async (fieldsState) => {
  const apiUrl = global.config.apiBaseURL.url;
  let dataArray = {
    school_name: fieldsState.high_school_name,
   city: fieldsState.high_school_city,
    state: fieldsState.high_school_state,
   country: fieldsState.high_school_country,
   dt_from: fieldsState.high_school_from,
   dt_to: fieldsState.high_school_to,
   university:JSON.stringify(fieldsState.universty),
   pri:JSON.stringify(fieldsState.private),
    resume:JSON.stringify( fieldsState.resume),
    pub: JSON.stringify(fieldsState.public),

  };

 console.log(fieldsState.universty)
  const formBody = handleFormRequest(dataArray);

  return  axios.post(apiUrl + "user/education", formBody, {
    headers:  {
      "Authorization": "Bearer "+getToken(),
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  
 
 
  
  
  .then((responseData) => {
    if (!responseData.data.success) {
      alert(responseData.msg);
    } else {
      alert(responseData.data.msg);
    }
    return responseData.data;
  })
  .catch((error) => {
    console.log(error)
    alert("Server not responsed, Please try again!");
    return error;
  });
};




// USING METHOD TO HANDLE REQUEST
function handleFormRequest(dataArray) {
  var formBody = [];
  for (var property in dataArray) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(dataArray[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
}
