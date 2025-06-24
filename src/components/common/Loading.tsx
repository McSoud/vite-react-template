import { SvgLoadingSpinner } from "@mcsoud/react-ui";
import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes, SVGProps, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  state?: boolean;
  className?: DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >["className"];
  svgClassName?: SVGProps<SVGSVGElement>["className"];
};

export default function Loading({
  state = true,
  className,
  svgClassName,
}: Props) {
  const [removed, setRemoved] = useState(!state);
  if (!state) setTimeout(() => setRemoved(true), 10000);
  if (removed) return null;
  return (
    <section
      role="status"
      aria-busy="true"
      aria-label="loading"
      className={twMerge(
        "animate-fade-in grid size-full place-items-center transition-[grid-template-rows] duration-100",
        clsx(!state ? "animate-fade-out grid-rows-[0fr]" : "grid-rows-[1fr]"),
        className,
      )}
    >
      <div className="overflow-hidden">
        <SvgLoadingSpinner
          className={twMerge("my-2 size-12 fill-white", svgClassName)}
        />
      </div>
    </section>
  );
}
