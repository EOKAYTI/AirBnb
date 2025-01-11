import { http } from "./config";

export const phongService = {
  getDanhSachPhongThue: () => {
    return http.get(`/phong-thue`);
  },
  getPhongThueTheoViTri: (id) => {
    return http.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`);
  },
  getChiTietPhong: (id) => {
    return http.get(`/phong-thue/${id}`);
  },
};
