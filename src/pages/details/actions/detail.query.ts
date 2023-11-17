import { useQuery } from "react-query"
import { getDetailService } from "./detail.service";
import { IFormValues } from "../../form/form";

export const useDetail = (id:number) => {
    return useQuery<IFormValues, Error>(["users", id], () => {
      return getDetailService(id);
    },{
      enabled : !!id,
    });
}