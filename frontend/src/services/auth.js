import { host } from "../constants";
import httpInternal from "../httpInternal";
let localStorage = global.window.localStorage;

const auth = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  login(username, password) {
    if (auth.loggedIn()) return auth.getAuth();

    return httpInternal
      .post(`${host}/login/access-token`, {
        username,
        password
      })
      .then(response => {
        return response;
      });
  },
  /**
   * Logs the current user out
   */
  logout() {
    localStorage.removeItem("auth");
  },

  getAuth() {
    return !!localStorage.auth ? JSON.parse(localStorage.auth) : null;
  },
  /**
   * Checks if a user is logged in
   */
  loggedIn() {
    return !!localStorage.auth;
  }
};

export default auth;
