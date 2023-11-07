import axios from "axios";
import { API } from "../../../core/configs/api.config";

export const addUser = async (user: any): Promise<any> => {
  return axios
    .post("http://localhost:3000/users/", user)
    .then((res) => res.data);
};

export const updateUser = async (user: any): Promise<any> => {
  // console.log(user_id);
  
  return axios
    .put(`http://localhost:3000/users/${user.user_id}`, user)
    .then((res) => res.data);
};
