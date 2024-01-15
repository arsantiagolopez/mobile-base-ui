import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil";
import { useRecoilValueClient } from "@/hooks/recoil";
import DashboardScreen from "@/screens/DashboardScreen";
import WelcomeScreen from "@/screens/WelcomeScreen";

const HomePage = () => {
  const isLoggedIn = useRecoilValueClient(loginState, DEFAULT_LOGIN_STATE);

  if (isLoggedIn) {
    return <DashboardScreen />;
  }

  return <WelcomeScreen />;
};

export default HomePage;
