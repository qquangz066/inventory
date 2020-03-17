import { host } from "../constants";
import httpInternal from "../httpInternal";

const categoryService = {
  async list() {
    return await httpInternal
      .get(`${host}/categories/`)
      .then(res => res.data);
  }
};

export default categoryService;
