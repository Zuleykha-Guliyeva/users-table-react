import axios from "axios";
export const addUser = async (user: any): Promise<any> => {
  return axios
    .post("http://localhost:3000/users/", user)
    .then((res) => res.data);
};

export const updateUser = async (user: any): Promise<any> => {
  return axios
    .put(`http://localhost:3000/users/${user.user_id}`, user)
    .then((res) => res.data);
};
