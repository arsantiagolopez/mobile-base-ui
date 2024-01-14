import type { ReactNode } from "react";
import clsx from "clsx";

type SlideProps = {
  children: ReactNode;
  className?: string;
};

const Slide = ({ children, className }: SlideProps) => {
  const defaultClasses = "keen-slider__slide h-[100dvh]";

  return <div className={clsx(defaultClasses, className)}>{children}</div>;
};

export default Slide;
