import { getToken } from "./user.service";

// USING METHOD TO SUBMIT USER PERSONAL DATA
export const personalProfileData = async (fieldsState) => {
  const apiUrl = global.config.apiBaseURL.url;
  let dataArray = {
    first_name: fieldsState.first_name,
    middle_name: fieldsState.middle_name,
    last_name: fieldsState.last_name,
    pri:JSON.stringify(fieldsState.private),
    resume:JSON.stringify( fieldsState.resume),
    pub: JSON.stringify(fieldsState.public),

    address: fieldsState.address,
    zip_code: fieldsState.zip_code,
    city: fieldsState.city,
    state: fieldsState.state,
    country: fieldsState.country,
    phone_number: fieldsState.phone_number,
    phone_type:fieldsState.phone_type,
    preferred_first_name:fieldsState.preferred_name
  };
  const formBody = handleFormRequest(dataArray);

  return fetch(apiUrl + "user/personal", {
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
