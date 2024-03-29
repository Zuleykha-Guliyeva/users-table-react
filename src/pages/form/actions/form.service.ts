import axios from "axios";
import { IFormValues } from "../form";

export const addUser = async (user: IFormValues): Promise<IFormValues> => {
  return axios
    .post(`http://localhost:3000/users`, user)
    .then((res) => res.data);
};

export const updateUser = async (user: IFormValues): Promise<IFormValues> => {
  console.log(user.id);
  
  return axios
    .put(`http://localhost:3000/users/${user.id}`, user)
    .then((res) => res.data);
};
