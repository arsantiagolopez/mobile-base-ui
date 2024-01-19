import { DialogClose } from "@radix-ui/react-dialog";
import Button from "../Button";
import Modal, { ModalContent, ModalTrigger } from "../Modal";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { useRecoilStateClient } from "@/hooks/recoil";
import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil";

type MenuModalProps = {
  className?: string;
};

const MenuModal = ({ className }: MenuModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [_, setIsLoggedIn] = useRecoilStateClient(
    loginState,
    DEFAULT_LOGIN_STATE
  );

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const links = [
    { id: "home", href: "/", label: "Home" },
    { id: "rankings", href: "/rankings", label: "Rankings" },
    { id: "calendar", href: "/calendar", label: "Calendar" },
    { id: "tracker", href: "/tracker", label: "Tracker" },
  ];

  const footerLinks = [
    { id: "logout", label: "Log out", onClick: handleLogout },
  ];

  return (
    <Modal open={isOpen} onOpenChange={handleOpen}>
      <ModalTrigger asChild>
        <Button variant="unstyled" className={className}>
          <svg
            stroke="white"
            fill="white"
            stroke-width="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
          </svg>
        </Button>
      </ModalTrigger>
      <ModalContent className="fixed top-0 left-0 flex flex-col items-start gap-16">
        <DialogClose
          className={clsx(
            "px-3 py-4 transition-opacity hover:opacity-50",
            className
          )}
        >
          <IconX size={28} color="white" />
        </DialogClose>

        <div className="flex flex-col items-start gap-16 animate-scale-fade origin-[100%_125%] md:origin-[200%_100%] w-fit">
          <div className="flex flex-col gap-5 px-5">
            {links.map(({ id, href, label }) => (
              <Link
                key={id}
                href={href}
                className="text-3xl text-white transition-opacity hover:opacity-50"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-5 px-5">
            {footerLinks.map(({ id, label, onClick }) => (
              <button
                key={id}
                onClick={onClick}
                className="text-white transition-opacity hover:opacity-50 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default MenuModal;
