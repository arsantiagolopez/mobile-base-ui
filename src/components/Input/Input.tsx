import clsx from "clsx";
import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

type VariantType = "outlined" | "solid" | "unstyled";
type IconPlacementType = "start" | "end";

type InputIconProps = {
  placement: IconPlacementType;
  icon: ReactNode;
};

const InputIcon = ({ placement, icon }: InputIconProps) => (
  <div
    className={clsx("absolute", {
      "left-4": placement === "start",
      "right-4": placement === "end",
    })}
  >
    {icon}
  </div>
);

const getInputClasses = (
  variant: VariantType,
  iconPlacement: IconPlacementType,
  icon?: ReactNode
) => {
  const defaultClasses =
    "text-xs w-full rounded-xl p-2 px-4 border-[1.5px] focus:outline-white placeholder:text-tertiary";
  const iconPaddingClasses = clsx({
    "pl-10": icon && iconPlacement === "start",
    "pr-10": icon && iconPlacement === "end",
  });
  const variantClasses = {
    outlined:
      "text-white bg-black active:text-gray-400 border-tertiary hover:border-white",
    solid:
      "bg-secondary focus:bg-primary border-secondary hover:border-tertiary",
    unstyled: "",
  };

  return clsx(defaultClasses, iconPaddingClasses, variantClasses[variant]);
};

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  className?: string;
  variant?: VariantType;
  icon?: ReactNode;
  iconPlacement?: IconPlacementType;
};

const Input = ({
  className,
  variant = "outlined",
  icon,
  iconPlacement = "start",
  ...props
}: InputProps) => {
  const inputClasses = getInputClasses(variant, iconPlacement, icon);

  return (
    <div className="relative flex items-center w-full">
      {icon && iconPlacement === "start" && (
        <InputIcon placement="start" icon={icon} />
      )}

      <input className={clsx(inputClasses, className)} {...props} />

      {icon && iconPlacement === "end" && (
        <InputIcon placement="end" icon={icon} />
      )}
    </div>
  );
};

export default Input;
