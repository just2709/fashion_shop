import axiosClient from "./axiosClient";

const productApi = {
  getAll() {
    const url = "/carts";
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/carts/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/carts/${data.id}`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/carts/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/carts/${id}`;
    return axiosClient.remove(url);
  },
};

export default productApi;
