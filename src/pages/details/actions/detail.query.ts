import { useQuery } from "react-query";
import { getDetailService } from "./detail.service";
import { IFormValues } from "../../form/form";

export const useDetail = (user_id: number) => {
  return useQuery<IFormValues, Error>(
    ["users", user_id],
    () => {
      return getDetailService(user_id);
    },
    {
      enabled: !!user_id,
    }
  );
};
