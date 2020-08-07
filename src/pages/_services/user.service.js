// return the user data from the session storage
export const getUserDetails = () => {
  const userStr = localStorage.getItem("user_details");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem("access_token") || null;
};

// remove the token and user from the session storage
export const logout = () => {
  if (window.confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("user_Id");
    localStorage.removeItem("user_Name");
    localStorage.removeItem("access_token");
  }
};

// set the token and user from the session storage
export const login = async (username, password) => {
  const apiUrl = global.config.apiBaseURL.url;
  let dataArray = {
    username: username,
    password: password,
  };
  const formBody = handleFormRequest(dataArray);

  return await fetch(apiUrl + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseData) => {
      if (!responseData.success) {
      
      } else {
        let userDetails = responseData.data;
        let userToken = responseData.accessToken;

        // DATA USING TO STORE IN LOCAL STORAGE OF BROWSER
        localStorage.setItem("user_Id", userDetails.user_id);
        localStorage.setItem("user_Name", userDetails.username);
        localStorage.setItem("access_token", userToken);
        localStorage.setItem("user_details", JSON.stringify(userDetails));
        alert(responseData.msg);
      }
      return responseData;
    })
    .catch((error) => {
      return error;
    });
};

// USING METHOD TO VERIFY USER BY EMAIL OTP
export const verifyEmail = async (fieldsState) => {
  const apiUrl = global.config.apiBaseURL.url;

  let dataArray = {
    username: fieldsState.email,
    otp: fieldsState.otp,
  };
  const formBody = handleFormRequest(dataArray);

  return fetch(apiUrl + "auth/email_verify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseData) => {
      if (!responseData.success) {
        alert(responseData.msg);
      }else {
        alert(responseData.msg);
      }
      return responseData;
    })
    .catch((error) => {
      alert("Server not responsed, Please try again!");
      return error;
    });
};

// set the token and user from the session storage
export const register = (fieldsState) => {
  const apiUrl = global.config.apiBaseURL.url;
  let dataArray = {
    email: fieldsState.email,
    password: fieldsState.password,
    re_password: fieldsState.rePassword,
  };
  const formBody = handleFormRequest(dataArray);

  return fetch(apiUrl + "auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formBody,
  })
    .then(handleResponse)
    .then((responseData) => {
      if (!responseData.success) {
        alert(responseData.msg);
      } else {
        alert(responseData.msg);
      }

      console.log("Response form API ----- ", responseData);
      
      return responseData;
    })
    .catch((error) => {
      alert("Server not responsed, Please try again!");
      return error;
    });
};

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        alert("Server not responsed, Please try again!");
        // localStorage.removeItem("user_Id");
        // localStorage.removeItem("user_Name");
        // localStorage.removeItem("user_details");
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

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


