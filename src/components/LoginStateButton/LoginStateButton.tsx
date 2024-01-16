import { useRouter } from "next/router";
import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil/atoms";
import { useRecoilStateClient } from "@/hooks/recoil";
import Button from "../Button";

type LoggingStateButtonProps = {};

const LoggingStateButton = ({}: LoggingStateButtonProps) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilStateClient(
    loginState,
    DEFAULT_LOGIN_STATE
  );

  const router = useRouter();

  const hiddenRoutes = ["/signup", "/login"];
  const shouldHide = hiddenRoutes.includes(router.asPath);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  if (shouldHide) {
    return null;
  }

  return (
    <Button
      variant="outline"
      onClick={toggleLogin}
      className="z-50 fixed top-2 left-2 !text-[10px] px-1 py-0.5 !rounded-md opacity-20 hover:opacity-100"
    >
      {isLoggedIn ? "Logged in" : "Logged out"}
    </Button>
  );
};

export default LoggingStateButton;
