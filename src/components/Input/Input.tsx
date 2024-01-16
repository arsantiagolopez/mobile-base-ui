import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type KeyboardEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { withNativeProps } from "@/utils/native-props";
import { getContainerClass, getInputClass } from "./styleClasses";
import { type TablerIconsProps } from "@tabler/icons-react";

export type VariantType = "outlined" | "solid" | "unstyled";
type InputOnKeyDownType = (event: KeyboardEvent<HTMLInputElement>) => void;

type NativeInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = Exclude<NativeInputProps, "className" | "onKeyDown"> & {
  variant?: VariantType;
  label?: string;
  onEnterPress?: InputOnKeyDownType;
  helperText?: string;
  helperIcon?: (props: TablerIconsProps) => JSX.Element;
  className?: string;
  onKeyDown?: InputOnKeyDownType;
};

type InputRef = {
  focus: () => void;
  blur: () => void;
  nativeElement: HTMLInputElement | null;
};

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  let {
    variant = "outlined",
    label,
    onEnterPress,
    helperText,
    helperIcon,
    className,
    onKeyDown,
    ...rest
  } = props;

  const nativeInputRef = useRef<HTMLInputElement>(null);

  const containerClass = getContainerClass(variant, label, helperText);
  const inputClass = getInputClass(variant, label);

  const HelperIcon = helperIcon;

  useImperativeHandle(ref, () => ({
    focus: () => {
      nativeInputRef.current?.focus();
    },
    blur: () => {
      nativeInputRef.current?.blur();
    },
    get nativeElement() {
      return nativeInputRef.current;
    },
  }));

  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (onEnterPress && (event.code === "Enter" || event.key === "Enter")) {
      onEnterPress(event);
    }
    onKeyDown?.(event);
  };

  return withNativeProps(
    props,
    <div className={containerClass}>
      {label && (
        <p className="absolute top-5 left-4 text-xs text-tertiary">{label}</p>
      )}

      <input
        ref={nativeInputRef}
        onKeyDown={handleKeydown}
        className={inputClass}
        {...rest}
      />

      {helperText && (
        <div className="flex items-center gap-1 px-3">
          {HelperIcon && <HelperIcon size={14} color="#939393" />}
          <p className="text-[10px] text-tertiary">{helperText}</p>
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
