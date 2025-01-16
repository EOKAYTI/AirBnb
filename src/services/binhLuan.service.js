import { http } from "./config";

export const binhLuanService = {
  getBinhLuanTheoId: (id) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-phong/${id}`);
  },
};
