import axiosInstance from "../../../core/configs/axios.config";

export const getDetailService = (id:number) => {
    return axiosInstance.get(`http://localhost:3000/users/${id}`).then((res) => res.data);
}