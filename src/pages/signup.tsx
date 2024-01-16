import { useRecoilValueClient } from "@/hooks/recoil";
import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil";
import LoadingRedirect from "@/components/LoadingRedirect";
import OnboardingScreen from "@/screens/OnboardingScreen";

type SignupPageProps = {};

const SignupPage = ({}: SignupPageProps) => {
  const isLoggedIn = useRecoilValueClient(loginState, DEFAULT_LOGIN_STATE);

  if (isLoggedIn) {
    return <LoadingRedirect />;
  }

  return <OnboardingScreen />;
};

export default SignupPage;
