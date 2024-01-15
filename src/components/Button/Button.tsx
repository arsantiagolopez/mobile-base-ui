import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import clsx from "clsx";

type VariantType = "solid" | "outline" | "unstyled";
type ThemeType = "dark" | "light";

const getButtonClasses = (
  variant: VariantType,
  theme: ThemeType,
  disabled?: boolean
) => {
  const defaultClasses = "text-sm rounded-xl p-2";
  const interactiveStyles = !disabled
    ? {
        solid: {
          dark: "hover:bg-gray-300 active:bg-gray-400",
          light: "hover:bg-neutral-900 active:bg-neutral-950",
        },
        outline: {
          dark: "hover:border-white hover:text-white active:text-gray-400 active:border-gray-400",
          light: "active:text-gray-600 active:border-gray-600",
        },
      }
    : {};

  const variantStyles = {
    solid: {
      dark: clsx("bg-white text-black", interactiveStyles.solid?.dark),
      light: clsx("bg-secondary text-white", interactiveStyles.solid?.light),
    },
    outline: {
      dark: clsx(
        "border border-[1.5px] border-tertiarty text-tertiary",
        interactiveStyles.outline?.dark
      ),
      light: clsx(
        "border border-[1.5px] border-gray-400 text-gray-400",
        interactiveStyles.outline?.light
      ),
    },
  };

  return (
    variant !== "unstyled" &&
    clsx(defaultClasses, variantStyles[variant][theme])
  );
};

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  className?: string;
  variant?: VariantType;
  theme?: ThemeType;
};

const Button = ({
  children,
  className,
  variant = "solid",
  theme = "dark",
  ...props
}: ButtonProps) => {
  const { disabled } = props;

  const buttonClasses = getButtonClasses(variant, theme, disabled);
  const cursorClass = disabled ? "cursor-default" : "cursor-pointer";

  return (
    <button className={clsx(cursorClass, buttonClasses, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
