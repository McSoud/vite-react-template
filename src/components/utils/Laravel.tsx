import TLaravelResponse, {
  TLaravelError,
  TLaravelSuccess,
} from "@/types/utils/laravel";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ReactNode } from "react";
import { toast } from "sonner";

type TLaravelQuery<T, E> = Omit<
  Parameters<
    typeof useQuery<TLaravelResponse<T, E>, AxiosError<TLaravelError<E>>>
  >[0],
  "queryFn"
> & {
  endPoint: string;
  axiosParams?: Parameters<typeof axios.get>[1];
  toastError?:
    | string
    | ((err: AxiosError<TLaravelError<E>> | undefined) => string | ReactNode);
  toastSuccess?: string | ((res: TLaravelSuccess<T>) => string | ReactNode);
  callback?: (res: TLaravelResponse<T, E>) => void;
};

export default function useLaravelQuery<T, E = unknown>({
  queryKey,
  endPoint,
  axiosParams,
  toastError,
  toastSuccess,
  callback,
  ...queryParams
}: TLaravelQuery<T, E>) {
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const res = await axios.get<TLaravelResponse<T, E>>(
          endPoint,
          axiosParams,
        );
        callback && callback(res.data);
        if (toastSuccess)
          toast.success(
            typeof toastSuccess === "string"
              ? toastSuccess
              : toastSuccess(res.data as TLaravelSuccess<T>),
          );
        return res.data;
      } catch (err) {
        console.error(err);
        toast.error(
          toastError
            ? typeof toastError === "string"
              ? toastError
              : toastError(err as AxiosError<TLaravelError<E>>)
            : ((err as AxiosError<TLaravelError<E>>).response?.data.message ??
                "Something went wrong"),
        );
        throw err;
      }
    },
    ...queryParams,
  });
  const Display = ({
    success,
    error,
    loading,
  }: {
    success: ReactNode | ((data: T) => ReactNode);
    loading?: ReactNode;
    error?: ReactNode | ((err: TLaravelError<E>) => ReactNode);
  }) => {
    const { data, isPending, isSuccess, error: err } = query;
    if (isPending) return loading ?? <p>Loading...</p>;
    if (isSuccess && data?.success)
      return typeof success === "function" ? success(data.data) : success;
    return error ? (
      typeof error === "function" ? (
        error(
          err?.response?.data ?? {
            success: false,
            message: "Something went wrong",
          },
        )
      ) : (
        error
      )
    ) : (
      <p>Something went wrong</p>
    );
  };
  return { Display, ...query };
}
