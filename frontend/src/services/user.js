import { host } from "../constants";
import httpInternal from "../httpInternal";

const userService = {
  async list(params) {
    return await httpInternal
      .get(`${host}/users/`, { params })
      .then(res => res.data);
  },
  async activate(id) {
    return await httpInternal
      .post(`${host}/users/${id}/activate`)
      .then(res => res.data);
  },
  async deactivate(id) {
    return await httpInternal
      .post(`${host}/users/${id}/deactivate`)
      .then(res => res.data);
  }
};

export default userService;
