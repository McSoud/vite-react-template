import { ModalId } from "@/types/utils/components";

export function scrollToId(id: string) {
  const section = document.getElementById(id);
  section && section.scrollIntoView();
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toggleModal(id: ModalId, state?: boolean) {
  const modal = document.getElementById(`${id}-modal`) as HTMLDialogElement;
  typeof state !== "boolean"
    ? modal[modal.open ? "close" : "showModal"]()
    : modal[state ? "showModal" : "close"]();
  return modal.open;
}
