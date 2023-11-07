import axios from "axios";
import { API } from "../../../core/configs/api.config";

export const addUser = async (user: any): Promise<any> => {
  //   console.log(user);
  try {
    const response = await axios.post("http://localhost:3000/users/", user);
    return response.data;
  } catch (error) {
    console.error("xeta bas verdi");
  }
  //   return axios.post("http://localhost:3000/users/", user).then((res) => res.data);
};

export const updateUser = async (user:any): Promise<any> => {
  try{
    const response = await axios.put(`http://localhost:3000/users/1`, user);
    return response.data;
  } catch (error) {
    console.error("xeta bas verdi");
    
  }
}
