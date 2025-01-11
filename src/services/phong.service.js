import { http } from "./config";

export const phongService = {
  getPhongThueTheoViTri: (id) => {
    return http.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`);
  },
  getChiTietPhong: (id) => {
    return http.get(`/phong-thue/${id}`);
  },
};
