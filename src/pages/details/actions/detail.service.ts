import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import DetailModel from "../models/detail.model";

export const getDetailService = (id:number) => {
    return axiosInstance
      .get(API.users + `/${id}`)
      .then((res) => new DetailModel(res.data));
}