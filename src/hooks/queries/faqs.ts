import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import QUERY_KEYS from "@/constants/utils/queryKeys";
import { LaravelResponse } from "@mcsoud/types";

export default function useQueryFaqs() {
  return useQuery({
    queryKey: QUERY_KEYS.faqs,
    queryFn: async function () {
      return (await axios.get<LaravelResponse<[]>>("/faqs")).data;
    },
    staleTime: 5_000,
  });
}
