import { http } from "./config";

export const datPhongService = {
  getDanhSachDatPhong: () => {
    return http.get(`/dat-phong`);
  },
};
