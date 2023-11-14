import { useQuery } from "react-query"
import { getUpdateService } from "./form.service";

export const useUpdate = (id:number) => {
    return useQuery<any[], Error>(["users", (id)] , () =>{
        return getUpdateService(id);

    },{
        enabled: !!id, // eger id varsa sorgunu et
    })
}