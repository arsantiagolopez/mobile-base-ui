import { useRecoilValueClient } from "@/hooks/recoil";
import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil";
import type { ReactNode } from "react";
import Navigation from "./Navigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const isLoggedIn = useRecoilValueClient(loginState, DEFAULT_LOGIN_STATE);

  if (!isLoggedIn) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
