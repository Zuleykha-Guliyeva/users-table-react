import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import { IFormValues } from "../../form/form";

export const getDetailService = (user_id: number): Promise<IFormValues> => {
  return axiosInstance
    .get(API.users + `/${user_id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Detay getirilerken xeta bas verdi:", error);
      throw new Error("Detaylar getirilemedi");
    });
};
