import { getToken } from "./user.service";

// USING METHOD TO SUBMIT USER PERSONAL DATA
export const EmploymentData = async (fieldsState) => {
  const apiUrl = global.config.apiBaseURL.url;
  let dataArray = {
    employment:fieldsState.employment,
    pri: fieldsState.private,
    resume: fieldsState.resume,
    pub: fieldsState.public,
  };

 
  const formBody = handleFormRequest(dataArray);

  return fetch(apiUrl + "user/experience", {
    method: "POST",
    headers: {
      "Authorization": "Bearer "+getToken(),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseData) => {
      if (!responseData.success) {
        alert(responseData.msg);
      } else {
        alert(responseData.msg);
      }
      return responseData;
    })
    .catch((error) => {
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
