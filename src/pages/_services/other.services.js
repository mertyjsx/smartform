import { getToken } from "./user.service";

// USING METHOD TO SUBMIT USER PERSONAL DATA
export const certificateData = async (fieldsState) => {
  const apiUrl = global.config.apiBaseURL.url;
  let dataArray = {
    certificate:JSON.stringify(fieldsState.Certification),
    pri:JSON.stringify(fieldsState.private),
    resume:JSON.stringify( fieldsState.resume),
    pub: JSON.stringify(fieldsState.public),

  };

 
  const formBody = handleFormRequest(dataArray);

  return fetch(apiUrl + "user/certificate", {
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

export const interestData = async (fieldsState) => {
    const apiUrl = global.config.apiBaseURL.url;
    let dataArray = {
        Interest:JSON.stringify(fieldsState.Interest),
        pri:JSON.stringify(fieldsState.private),
        resume:JSON.stringify( fieldsState.resume),
        pub: JSON.stringify(fieldsState.public),
  
    };
  
   
    const formBody = handleFormRequest(dataArray);
  
    return fetch(apiUrl + "user/interest", {
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
  export const skillData = async (fieldsState) => {
    const apiUrl = global.config.apiBaseURL.url;
    let dataArray = {
      skill:JSON.stringify(fieldsState.skills),
      pri:JSON.stringify(fieldsState.private),
      resume:JSON.stringify( fieldsState.resume),
      pub: JSON.stringify(fieldsState.public),
  
    };
  
   
    const formBody = handleFormRequest(dataArray);
  
    return fetch(apiUrl + "user/skill", {
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
  export const projectData = async (fieldsState) => {
    const apiUrl = global.config.apiBaseURL.url;
    let dataArray = {
      project:JSON.stringify(fieldsState.project),
      pri:JSON.stringify(fieldsState.private),
      resume:JSON.stringify( fieldsState.resume),
      pub: JSON.stringify(fieldsState.public),
  
    };
  
   
    const formBody = handleFormRequest(dataArray);
  
    return fetch(apiUrl + "user/project", {
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
