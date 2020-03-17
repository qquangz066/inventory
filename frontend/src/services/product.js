import { host } from "../constants";
import httpInternal from "../httpInternal";

const productService = {
  async list(params) {
    return await httpInternal
      .get(`${host}/products/`, { params })
      .then(res => res.data);
  },
  async get(id) {
    return await httpInternal
      .get(`${host}/products/${id}`)
      .then(res => res.data);
  },
  async getByUpc(upc) {
    return await httpInternal
      .get(`${host}/products/upc/${upc}`)
      .then(res => res.data);
  },
  async create(product) {
    return await httpInternal
      .post(`${host}/products/`, product)
      .then(res => res.data);
  },
  async update(id, product) {
    return await httpInternal
      .put(`${host}/products/${id}`, product)
      .then(res => res.data);
  },
  async delete(id) {
    return await httpInternal
      .delete(`${host}/products/${id}`)
      .then(res => res.data);
  }
};

export default productService;
