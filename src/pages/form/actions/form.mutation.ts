import { useMutation, useQueryClient } from "react-query";
import { addUser, updateUser } from "./form.service";
import { IFormValues } from "../form";

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: IFormValues) => {
      return addUser(user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: IFormValues) => {
      return updateUser(user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
