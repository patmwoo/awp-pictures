import axios from "axios";

/*
 * file - client/src/Util.js
 * author - Patrick Richeal
 * 
 * Misc util functions
 */

/**
 * Helper function to make axios api calls
 */
export const apiCall = axios.create({
  baseURL: "http://localhost/awp-pictures/api/public",
  responseType: "json"
});

/**
 * Function to validate email address
 * @param string email The email address to validate
 * @return True if email valid, false otherwise
 */
export const emailValid = (email) => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Function to get the currently logged in user id
 * @return String user id if logged in, null otherwise
 */
export const getLoggedInUserId = () => {
  return localStorage.getItem('user_id');
}

/**
 * Function to get the currently logged in username
 * @return String username if logged in, null otherwise
 */
export const getLoggedInUsername = () => {
  return localStorage.getItem('username');
}

/**
 * Function to logout user
 */
export const logout = () => {
  localStorage.clear();
}