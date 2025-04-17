import { TModal } from "@/types/utils/components";
import { DetailedHTMLProps, DialogHTMLAttributes, ReactNode } from "react";
import { createPortal } from "react-dom";

type TProps = DetailedHTMLProps<
  DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> & {
  id: TModal;
  children: ReactNode;
};

export default function Modal({ id, children, ...props }: TProps) {
  return createPortal(
    <dialog id={`${id}-modal`} {...props} popover="auto">
      <form method="dialog">
        <button type="submit">Close</button>
      </form>
      {children}
    </dialog>,
    document.body,
  );
}
