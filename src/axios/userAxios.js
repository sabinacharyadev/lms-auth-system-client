import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;
const USER_ENDPOINT = "/api/v1/users";

const USER_API_URL = API_BASE_URL + USER_ENDPOINT;

// Public Routes
// Signup | Create User | POST
export const createUser = (userObj) => {
  const response = axios
    .post(USER_API_URL, userObj)
    .then((res) => res.data)
    .catch((e) => console.log(e));

  return response;
};

// Verify User
export const verifyUser = (userEmail, token) => {
  const response = axios
    .patch(USER_API_URL, { userEmail, token })
    .then((res) => res.data)
    .catch((e) => console.log(e));

  return response;
};
