import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil/atoms";
import { useRecoilStateClient } from "@/hooks/recoil";
import Button from "../Button";

type LoggingStateButtonProps = {};

const LoggingStateButton = ({}: LoggingStateButtonProps) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilStateClient(
    loginState,
    DEFAULT_LOGIN_STATE
  );

  return (
    <Button
      variant="outline"
      onClick={() => setIsLoggedIn(!isLoggedIn)}
      className="z-50 fixed top-5 left-5 text-xs px-2 py-1.5 opacity-20"
    >
      {isLoggedIn ? "Logged in" : "Logged out"}
    </Button>
  );
};

export default LoggingStateButton;
