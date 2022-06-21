import type { ReactNode } from "react";
import clsx from "clsx";

export type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: ReactNode;
  children?: ReactNode;
  noSpace?: boolean;
  noHover?: boolean;
};

const baseStyles =
  "bg-white rounded-lg flex flex-col shadow shadow-gray-400/25";
const hoverStyles =
  "ease-in-out transform hover:-translate-y-1 duration-200 transition hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export function Panel(props: Props) {
  const { as: As = "div", children, className, noHover, noSpace } = props;

  return (
    <As
      className={clsx(
        baseStyles,
        className,
        { "px-5 py-4": !noSpace },
        { [hoverStyles]: !noHover },
      )}
    >
      {children}
    </As>
  );
}
