import axiosClient from "./axiosClient";

const categoryApi = {
  getAll() {
    const url = "/products/categories";
    return axiosClient.get(url);
  },

  get(name) {
    const url = `/products/categories/${name}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/products/categories`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/products/categories/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/products/categories/${id}`;
    return axiosClient.remove(url);
  },
};

export default categoryApi;
