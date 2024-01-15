import LoadingRedirect from "@/components/LoadingRedirect";
import { useRecoilValueClient } from "@/hooks/recoil";
import { DEFAULT_LOGIN_STATE, loginState, onboardingState } from "@/recoil";
import OnboardingScreen from "@/screens/OnboardingScreen";
import { useRecoilValue } from "recoil";

type SignupPageProps = {};

const SignupPage = ({}: SignupPageProps) => {
  const isLoggedIn = useRecoilValueClient(loginState, DEFAULT_LOGIN_STATE);
  const isOnboarding = useRecoilValue(onboardingState);

  if (isLoggedIn || !isOnboarding) {
    return <LoadingRedirect />;
  }

  return <OnboardingScreen />;
};

export default SignupPage;
