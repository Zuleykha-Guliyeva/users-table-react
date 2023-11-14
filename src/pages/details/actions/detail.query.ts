import { useQuery } from "react-query"
import { getDetailService } from "./detail.service";

export const useDetail = (id:number) => {
    return useQuery<any[], Error>(["users", (id)], () => {
        return getDetailService(id);
    })
}