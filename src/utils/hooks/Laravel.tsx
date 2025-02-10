import {
  TLaravelError,
  TLaravelResponse,
  TLaravelSuccess,
} from "@/types/utils/laravel";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ReactNode } from "react";
import { toast } from "sonner";

type TLaravelQuery<T, E> = Omit<
  Parameters<typeof useQuery>[0],
  "queryKey" | "queryFn"
> & {
  queryKey: Parameters<typeof useQuery>[0]["queryKey"];
  endPoint: string;
  axiosParams?: Parameters<typeof axios.get>[1];
  toastError?:
    | string
    | ((err: AxiosError<TLaravelError<E>> | undefined) => string | ReactNode);
  toastSuccess?: string | ((res: TLaravelSuccess<T>) => string | ReactNode);
};

export function useLaravelQuery<T, E = unknown>({
  queryKey,
  endPoint,
  axiosParams,
  toastError,
  toastSuccess,
  ...params
}: TLaravelQuery<T, E>) {
  const query = useQuery<unknown, unknown, TLaravelResponse<T, E>, unknown[]>({
    //@ts-ignorecomment
    queryKey,
    queryFn: async () => {
      try {
        const res = await axios.get<TLaravelResponse<T, E>>(
          endPoint,
          axiosParams
        );
        if (toastSuccess)
          toast.success(
            typeof toastSuccess === "string"
              ? toastSuccess
              : toastSuccess(res.data as TLaravelSuccess<T>)
          );
        return res.data;
      } catch (err) {
        toast.error(
          toastError
            ? typeof toastError === "string"
              ? toastError
              : toastError(err as AxiosError<TLaravelError<E>>)
            : "Something went wrong"
        );
        return null;
      }
    },
    ...params,
  });
  const Display = ({
    success,
    error,
    loading,
  }: {
    success: (data: T) => ReactNode;
    loading?: ReactNode;
    error?: ReactNode;
  }) => {
    const { data, isLoading, isSuccess } = query;
    // if (!data && typeof isLoading === "undefined") return null;
    if (typeof isLoading !== "undefined" && isLoading) {
      return loading ? loading : <p>Loading...</p>;
    }
    if (isSuccess && (data as TLaravelResponse<T>)?.success)
      return success((data as TLaravelSuccess<T>).data);
    return error ? error : params?.enabled ? <p>Something went wrong</p> : null;
  };
  return { Display, ...query };
}
