import clsx from "clsx";
import type { VariantType } from "./Input";

export type GetClassType = (
  variant: VariantType,
  label?: string,
  helperText?: string
) => string;

export const getContainerClass: GetClassType = (variant, label, helperText) => {
  return clsx("relative flex w-full gap-1", {
    "items-center": !helperText,
    "flex-col items-start": helperText,
  });
};

export const getInputClass: GetClassType = (variant, label) => {
  const defaultClasses =
    variant !== "unstyled" &&
    "text-xs w-full rounded-xl p-2 px-4 border-[1px] placeholder:text-placeholder";

  const labelClasses =
    variant !== "unstyled" &&
    clsx({
      "pt-9 pb-5": label,
      "py-6": !label,
    });

  const variantClasses = {
    outlined: "text-white bg-black border-tertiary",
    solid: "bg-secondary border-secondary",
    unstyled: "",
  };

  const interactiveClasses = {
    outlined: "hover:border-white focus:outline-white",
    solid: "hover:border-tertiary focus:outline-[1px_solid_#939393]",
    unstyled: "",
  };

  return clsx(
    defaultClasses,
    labelClasses,
    variantClasses[variant],
    interactiveClasses[variant]
  );
};
