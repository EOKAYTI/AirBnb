import { http } from "./config";

export const nguoiDungService = {
  getDanhSachUser: () => {
    return http.get(`/users`);
  },
};
