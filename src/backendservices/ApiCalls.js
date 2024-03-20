import axios from "axios";
const API_BASE_URL = 'http://localhost:8000/user/api';
// const API_BASE_URL = 'https://backend.dyslexiafocus.com/user/api';

function updateAuthorizationHeader() {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['authorization'] = 'Bearer ' + token;
  }
  
  export function authUserData(callback, errorCallback) {
    updateAuthorizationHeader();
  
    axios
      .post(`${API_BASE_URL}${"/userdata"}`, "")
      .then((response) => {
        if (callback) {
          callback(response);
        }
      })
      .catch((error) => {
        if (errorCallback) {
          errorCallback(error);
        }
      });
  }
  
  export function postRequest(url, params, callback, errorCallback) {
    updateAuthorizationHeader()
    axios.post(API_BASE_URL + url, params)
      .then(response => {
        if (callback) {
          callback(response);
        }
      })
      .catch(error => {
        if (errorCallback) {
          errorCallback(error);
        }
      });
  }
  