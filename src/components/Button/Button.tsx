import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  theme?: "dark" | "light";
};

const Button = ({
  children,
  className,
  variant = "solid",
  theme = "dark",
  ...props
}: ButtonProps) => {
  const defaultClasses = "rounded-md text-sm p-2";

  const defaultOutlineClasses =
    "border hover:-ml-px hover:-mt-px hover:border-2";

  const variantClass = {
    solid: {
      dark: "bg-white text-black hover:bg-gray-300 active:bg-gray-400",
      light: "bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900",
    },
    outline: {
      dark: clsx(
        defaultOutlineClasses,
        "border-white text-white active:text-gray-400 active:border-gray-400"
      ),
      light: clsx(
        defaultOutlineClasses,
        "border-gray-400 text-gray-400 active:text-gray-600 active:border-gray-600"
      ),
    },
  };

  return (
    <button
      className={clsx(defaultClasses, variantClass[variant][theme], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
