import axios from "axios";
import auth from "./services/auth";
import store from "./store";
import { logout } from "./actions";

import { host } from "./constants";
// Set config defaults when creating the instance
const httpInternal = axios.create({
  baseURL: host
});

// Add a request interceptor
httpInternal.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    const token = auth.getAuth() && auth.getAuth().access_token;
    config.headers = { Authorization: `Bearer ${token}` };
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpInternal.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    if (
      error.response.status === 401
    ) {
      return store.dispatch(logout());
    }
    return Promise.resolve(error);
  }
);

export default httpInternal;
