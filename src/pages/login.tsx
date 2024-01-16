import { useRecoilValueClient } from "@/hooks/recoil";
import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil";
import LoadingRedirect from "@/components/LoadingRedirect";
import LoginScreen from "@/screens/LoginScreen";

type LoginPageProps = {};

const LoginPage = ({}: LoginPageProps) => {
  const isLoggedIn = useRecoilValueClient(loginState, DEFAULT_LOGIN_STATE);

  if (isLoggedIn) {
    return <LoadingRedirect />;
  }

  return <LoginScreen />;
};

export default LoginPage;
