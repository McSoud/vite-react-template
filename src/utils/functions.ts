import { LaravelError } from "@mcsoud/types";
import { AxiosError } from "axios";
import { toast } from "sonner";

export function scrollToId(id: string) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView();
}

export function toastErrorMessage(error: AxiosError<LaravelError>) {
  toast.error(error.response?.data.message ?? "Something went wrong");
}
