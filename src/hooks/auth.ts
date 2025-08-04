import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import { LaravelObject, LaravelResponse } from "@mcsoud/types";
import QUERY_KEYS from "@/constants/utils/queryKeys";

export function useUser(login = false) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: QUERY_KEYS.user,
    queryFn: async () => {
      if (!token) {
        if (login)
          navigate({
            to: "/login",
          });
        return null;
      }
      try {
        const res = await axios.get<LaravelResponse<LaravelObject>>("/me");
        if (res.data?.success) {
          toast.success("Welcome back!");
          return res.data;
        }
        return null;
      } catch (err) {
        if (pathname !== "verify-email") {
          toast.error("Token invalid.");
          localStorage.removeItem("token");
          queryClient.setQueryData(QUERY_KEYS.user, null);
          if (login) navigate({ to: "/login" });
        }
        return null;
      }
    },
  });
  return query;
}

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      await axios.post("/logout");
    },
    onSuccess: () => {
      toast.success("Logout successful.");
      router.history.back();
    },
    onError: () => {
      console.warn("Logout failed.");
      toast.warning("Logout incomplete.");
    },
    onSettled: () => {
      localStorage.removeItem("token");
      queryClient.setQueryData(QUERY_KEYS.user, null);
    },
  });
  return mutate;
}
