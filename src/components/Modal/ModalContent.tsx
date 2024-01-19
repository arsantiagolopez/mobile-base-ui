import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { Content, Overlay, Portal } from "@radix-ui/react-dialog";
import clsx from "clsx";

type ModalContentProps = typeof Content;

const ModalContent = forwardRef<
  ElementRef<ModalContentProps>,
  ComponentPropsWithoutRef<ModalContentProps>
>(({ children, className, ...props }, ref) => {
  const defaultClasses = "z-40 data-[state=open]:animate-fade";

  return (
    <Portal>
      <Overlay className="z-30 fixed inset-0 cursor-default bg-primary/10 backdrop-blur-md data-[state=open]:animate-fade" />
      <Content ref={ref} className={clsx(defaultClasses, className)} {...props}>
        {children}
      </Content>
    </Portal>
  );
});

ModalContent.displayName = "ModalContent";

export default ModalContent;
