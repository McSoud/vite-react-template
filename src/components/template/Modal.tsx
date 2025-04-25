import { DetailedHTMLProps, DialogHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";
import { toggleModal } from "../../utils/functions";
import SvgClose from "@/assets/svgs/icons/Close";
import { ModalId } from "@/types/utils/components";

interface Props
  extends Omit<
    DetailedHTMLProps<
      DialogHTMLAttributes<HTMLDialogElement>,
      HTMLDialogElement
    >,
    "id" | "children"
  > {
  id: ModalId;
  children: ReactNode;
  heading?: ReactNode;
}

export default function Modal({ id, children, heading, ...props }: Props) {
  return createPortal(
    <dialog role="dialog" {...props} id={`${id}-modal`} className="modal">
      <header>
        <h2>{heading && heading}</h2>
        <button
          onClick={() => toggleModal(id, false)}
          autoFocus={false}
          title="Close modal"
          className="close hover-pop"
        >
          <SvgClose />
        </button>
      </header>
      <div className={twMerge("content", props.className)}>{children}</div>
    </dialog>,
    document.body,
  );
}
