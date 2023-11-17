import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import { IFormValues } from "../../form/form";
import TableModel from "../models/table.model";

export const getUsersService = () => {
  return axiosInstance.get(API.users).then((res) => {
    return res.data.map((item: IFormValues) => new TableModel(item));
  });
};
export const deleteUserService = (userId: number): Promise<IFormValues> => {
  return axiosInstance.delete(API.users+`/${userId}`).then((res) => res.data);
};
