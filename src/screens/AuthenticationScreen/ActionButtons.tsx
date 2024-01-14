import Button from "@/components/Button";
import { useRecoilStateClient } from "@/hooks/recoil";
import {
  DEFAULT_LOGIN_STATE,
  DEFAULT_ONBOARDING_STATE,
  loginState,
  onboardingState,
} from "@/recoil";

type ActionButtonsProps = {};

const ActionButtons = ({}: ActionButtonsProps) => {
  const [isOnboarding, setIsOnboarding] = useRecoilStateClient(
    onboardingState,
    DEFAULT_ONBOARDING_STATE
  );
  const [isLoggedIn, setIsLoggedIn] = useRecoilStateClient(
    loginState,
    DEFAULT_LOGIN_STATE
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegistration = () => {
    setIsOnboarding(true);
  };

  const defaultButtonClasses = "px-5 py-3 rounded-xl";

  return (
    <div className="absolute bottom-5 left-5 flex items-center gap-2">
      <Button onClick={handleRegistration} className={defaultButtonClasses}>
        Sign up
      </Button>
      <Button
        theme="light"
        onClick={handleLogin}
        className={defaultButtonClasses}
      >
        Log in
      </Button>
    </div>
  );
};

export default ActionButtons;
