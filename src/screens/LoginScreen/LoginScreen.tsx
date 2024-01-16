import Carousel from "@/components/Carousel";
import { loginSlideState } from "@/recoil";
import EmailSlide from "./EmailSlide";
import EmailConfirmationSlide from "./EmailConfirmationSlide";

type LoginScreenProps = {};

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <Carousel
      slides={[EmailSlide, EmailConfirmationSlide]}
      recoilState={loginSlideState}
    />
  );
};

export default LoginScreen;
