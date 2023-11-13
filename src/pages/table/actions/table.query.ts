import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUsersService } from "./table.service";
import { deleteUserService } from "./table.service";

export const useUsers = () => {
  return useQuery<any[], Error>("users", () => {
    return getUsersService();
  });
};
export const usehandleDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: number) => {
      return deleteUserService(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
