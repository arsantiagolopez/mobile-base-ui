import {
  type CSSProperties,
  type ReactElement,
  type AriaAttributes,
  cloneElement,
} from "react";
import clsx from "clsx";

export type NativeProps<T extends string = never> = {
  className?: string;
  style?: CSSProperties & Partial<Record<T, string>>;
  tabIndex?: number;
} & AriaAttributes;

export const withNativeProps = <T extends NativeProps>(
  props: T,
  element: ReactElement
) => {
  const p = {
    ...element.props,
  };

  if (props.className) {
    p.className = clsx(element.props.className, props.className);
  }

  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    };
  }

  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex;
  }

  for (const key in props) {
    if (!props.hasOwnProperty(key)) {
      continue;
    }
    if (key.startsWith("data-") || key.startsWith("aria-")) {
      p[key] = props[key];
    }
  }

  return cloneElement(element, p);
};
