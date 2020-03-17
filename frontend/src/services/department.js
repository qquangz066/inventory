import { host } from "../constants";
import httpInternal from "../httpInternal";

const departmentService = {
  async list() {
    return await httpInternal
      .get(`${host}/departments/`)
      .then(res => res.data);
  }
};

export default departmentService;
