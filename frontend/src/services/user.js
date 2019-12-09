
import { host } from "../constants";
import httpInternal from "../httpInternal";

const userService = {
  async find() {
    return httpInternal
      .get(`${host}/users`)
      .then(res => res.data)
      .catch(err => {
        throw err;
      });
  },
  async get(id) {
    return httpInternal
      .get(`${host}/users${id}`)
      .then(res => res.data)
      .catch(err => {
        throw err;
      });
  },
  async create(user) {
    return httpInternal
      .post(`${host}/users`, user)
      .then(res => res.data)
      .catch(err => {
        throw err;
      });
  },
  async delete(id) {
    return httpInternal
      .delete(`${host}/users/${id}`)
      .then(res => res.data)
      .catch(err => {
        throw err;
      });
  }
};

export default userService;
