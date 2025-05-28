import SvgLoadingSpinner from "@/assets/svgs/icons/LoadingSpinner";
import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes, SVGProps, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  finished?: boolean;
  className?: DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >["className"];
  svgClassName?: SVGProps<SVGSVGElement>["className"];
};

export default function Loading({ finished = false, className }: Props) {
  const [removed, setRemoved] = useState(finished);
  if (finished) setTimeout(() => setRemoved(true), 500);
  if (removed) return null;
  return (
    <section
      id="loading"
      className={twMerge(
        "animate-fade-in grid grid-rows-[1fr] items-center bg-red-600 transition-[grid-template-rows] duration-500",
        clsx(finished && "animate-loading-fade-out"),
        className,
      )}
    >
      <div className="overflow-hidden">
        <SvgLoadingSpinner className="mx-auto my-2 size-16 fill-black" />
      </div>
    </section>
  );
}
