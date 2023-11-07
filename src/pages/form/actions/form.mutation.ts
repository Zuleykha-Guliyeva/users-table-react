import { useMutation, useQueryClient } from "react-query";
import { addUser, updateUser } from "./form.service";

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: any) => {
      return addUser(user);      
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation( {
    mutationFn: (user:any) => {
      return updateUser(user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
