import { TModal } from "@/types/utils/components";

export const scrollToId = (id: string) => {
  const section = document.getElementById(id);
  section && section.scrollIntoView();
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toggleModal = (id: TModal, state?: "open" | "close") => {
  const modal = document.getElementById(`${id}-modal`);
  if (modal instanceof HTMLDialogElement) {
    !state
      ? modal.open
        ? modal.close()
        : modal.showModal()
      : state === "open"
        ? modal.showModal()
        : modal.close();
    return modal.open;
  }
  return null;
};
