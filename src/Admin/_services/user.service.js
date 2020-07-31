// return the user data from the session storage
// export const getUserDetails = () => {
//   const userStr = localStorage.getItem("user_details_admin");
//   if (userStr) return JSON.parse(userStr);
//   else return null;
// };

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem("access_token_admin") || null;
};

// remove the token and user from the session storage
export const logout = () => {
  if (window.confirm("Are you sure you want to logout?")) {
    // localStorage.removeItem("user_Id_admin");
    // localStorage.removeItem("user_Name_admin");
    localStorage.removeItem("access_token_admin");
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

  return await fetch(apiUrl + "auth/admin_login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseData) => {
      if (!responseData.success) {
        alert(responseData.msg);
      } else {
        let userDetails = responseData.data;
        let userToken = responseData.accessToken;

        // DATA USING TO STORE IN LOCAL STORAGE OF BROWSER
        // localStorage.setItem("user_Id_admin", userDetails.user_id);
        // localStorage.setItem("user_Name_admin", userDetails.username);
        localStorage.setItem("access_token_admin", userToken);
        // localStorage.setItem("user_details_admin", JSON.stringify(userDetails));
        alert(responseData.msg);
      }
      return responseData;
    })
    .catch((error) => {
      return error;
    });
};


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



export const createUser = async ({email, password,rePassword,role}) => {
  const apiUrl = global.config.apiBaseURL.url;
  let dataArray = {
    email: email,
    password: password,
    re_passwrod:rePassword,
    role:role

  };
  const formBody = handleFormRequest(dataArray);

  return await fetch(apiUrl + "auth/admin_create_user", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseData) => {
      if (!responseData.success) {
        alert(responseData.msg);
      } else {
        let userDetails = responseData.data;
       

        alert(`${userDetails.email} has been created` );
      }
      return responseData;
    })
    .catch((error) => {
      return error;
    });
};