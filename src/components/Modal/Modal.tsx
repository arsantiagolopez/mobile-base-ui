import type { ComponentPropsWithoutRef } from "react";
import { Root } from "@radix-ui/react-dialog";

type ModalProps = ComponentPropsWithoutRef<typeof Root>;

const Modal = ({ children, ...props }: ModalProps) => {
  return <Root {...props}>{children}</Root>;
};

export default Modal;
