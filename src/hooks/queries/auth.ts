import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import _queryKeys from "./_queryKeys";
import { LaravelObject, LaravelResponse } from "@mcsoud/laravel";

export function useUser(login = false) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: _queryKeys.user,
    queryFn: async () => {
      if (!token) return null;
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
          queryClient.setQueryData(_queryKeys.user, null);
          if (login) navigate("/login");
        }
        return null;
      }
    },
  });
  return query;
}

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      await axios.post("/logout");
    },
    onSuccess: () => {
      toast.success("Logout successful.");
      navigate(0);
    },
    onError: () => {
      console.warn("Logout failed.");
      toast.warning("Logout incomplete.");
    },
    onSettled: () => {
      localStorage.removeItem("token");
      queryClient.setQueryData(_queryKeys.user, null);
    },
  });
  return mutate;
}
