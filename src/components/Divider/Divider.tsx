import clsx from "clsx";

type DividerProps = {
  orientation?: "vertical" | "horizontal";
  className?: string;
};

const Divider = ({ orientation = "horizontal", className }: DividerProps) => {
  const orientationClasses = {
    vertical: "border-r-[thin]",
    horizontal: "border-b-[thin]",
  };

  return (
    <hr
      className={clsx(
        "self-stretch m-0 shrink-0 border-tertiary border-0 border-solid",
        orientationClasses[orientation],
        className
      )}
    />
  );
};

export default Divider;
