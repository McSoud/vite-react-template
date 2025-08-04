import { LaravelError } from "@mcsoud/types";
import { AxiosError } from "axios";
import { toast } from "sonner";

export function scrollToId(id: string) {
  const section = document.getElementById(id);
  section && section.scrollIntoView();
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toastErrorMessage(error: AxiosError<LaravelError>) {
  toast.error(error.response?.data.message ?? "Something went wrong");
}
