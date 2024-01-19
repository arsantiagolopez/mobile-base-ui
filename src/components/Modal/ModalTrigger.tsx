import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { Trigger } from "@radix-ui/react-dialog";
import clsx from "clsx";

type ModalTriggerProps = typeof Trigger;

const ModalTrigger = forwardRef<
  ElementRef<ModalTriggerProps>,
  ComponentPropsWithoutRef<ModalTriggerProps>
>(({ children, className, asChild = false, ...props }, ref) => {
  const defaultClasses = "cursor-pointer";

  return (
    <Trigger
      ref={ref}
      className={asChild ? className : undefined}
      asChild
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <button type="button" className={clsx(defaultClasses, className)}>
          {children}
        </button>
      )}
    </Trigger>
  );
});

ModalTrigger.displayName = "ModalTrigger";

export default ModalTrigger;
