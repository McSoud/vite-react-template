import TLaravelResponse, {
  LaravelError,
  LaravelSuccess,
} from "@/types/utils/laravel";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ReactNode } from "react";
import { toast } from "sonner";

interface Props<T, E> {
  query: ReturnType<typeof useQuery<TLaravelResponse<T, E>, unknown>>;
  toastError?:
    | string
    | ((err: AxiosError<LaravelError<E>> | undefined) => string | ReactNode);
  toastSuccess?: string | ((res: LaravelSuccess<T>) => string | ReactNode);
}
interface Display<T, E> {
  success: ReactNode | ((data: T) => ReactNode);
  loading?: ReactNode;
  error?: ReactNode | ((err: AxiosError<LaravelError<E>>) => ReactNode);
}

export default function useLaravelQuery<T, E = unknown>({
  query,
  toastError,
  toastSuccess,
}: Props<T, E>) {
  const { data, isSuccess, isError, error } = query;
  if (isSuccess && data?.success) {
    if (toastSuccess)
      toast.success(
        typeof toastSuccess === "string"
          ? toastSuccess
          : toastSuccess(data.data as LaravelSuccess<T>),
      );
  }
  if (isError) {
    console.error(data);
    toast.error(
      toastError
        ? typeof toastError === "string"
          ? toastError
          : toastError(error as AxiosError<LaravelError<E>>)
        : ((error as AxiosError<LaravelError<E>>).response?.data.message ??
            "Something went wrong"),
    );
  }
  const Display = ({ success, error, loading }: Display<T, E>) => {
    const { data, isPending, isSuccess, error: err } = query;
    if (isPending) return loading ?? <p>Loading...</p>;
    if (isSuccess && data?.success)
      return typeof success === "function" ? success(data.data) : success;
    return error ? (
      typeof error === "function" ? (
        error(err as AxiosError<LaravelError<E>>)
      ) : (
        error
      )
    ) : (
      <p>Something went wrong</p>
    );
  };
  return Display;
}
