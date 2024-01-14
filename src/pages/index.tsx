import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil";
import { useRecoilValueClient } from "@/hooks/recoil";
import DashboardScreen from "@/screens/DashboardScreen";
import AuthenticationScreen from "@/screens/AuthenticationScreen";

const HomePage = () => {
  const isLoggedIn = useRecoilValueClient(loginState, DEFAULT_LOGIN_STATE);

  if (isLoggedIn) {
    return <DashboardScreen />;
  }

  return <AuthenticationScreen />;
};

export default HomePage;
