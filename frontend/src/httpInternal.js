import axios from "axios";
import auth from "./services/auth";
import store from "./store";
import { logout } from "./actions";
import { toast } from "react-toastify";

import { host } from "./constants";
import { getNestedObject } from "./utils/object";
// Set config defaults when creating the instance
const httpInternal = axios.create({
  baseURL: host
});

// Add a request interceptor
httpInternal.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    const token = auth.getAuth() && auth.getAuth().access_token;
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }
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
    if (error.response && error.response.status === 401) {
      store.dispatch(logout());
    } else if (
      getNestedObject(error, ["response", "status"]) === 422 &&
      getNestedObject(error, ["response", "data", "detail"])
    ) {
      let detail = getNestedObject(error, ["response", "data", "detail"]);
      detail.forEach(element => {
        if (element.loc[0] === "body") {
          toast.error(element.loc[2].replace("_", " ") + " -> " + element.msg);
        } else if (element.loc[0] === "path") {
          toast.error(element.loc[1].replace("_", " ") + " -> " + element.msg);
        }
      });
    } else {
      toast.error(
        getNestedObject(error, ["response", "data", "message"]) || error.message
      );
    }
    return Promise.reject(error);
  }
);

export default httpInternal;
