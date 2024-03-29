import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUsersService } from "./table.service";
import { deleteUserService } from "./table.service";
import { IFormValues } from "../../form/form";

export const useUsers = () => {
  return useQuery<IFormValues, Error>("users", () => {
    return getUsersService();
  });
};
export const usehandleDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user_id: number) => {
      return deleteUserService(user_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
