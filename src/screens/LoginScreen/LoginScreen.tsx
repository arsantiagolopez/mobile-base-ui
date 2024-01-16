import { loginSlideState } from "@/recoil";
import { useRecoilValue } from "recoil";
import Carousel from "@/components/Carousel";
import EmailSlide from "./EmailSlide";
import EmailConfirmationSlide from "./EmailConfirmationSlide";

type LoginScreenProps = {};

const LoginScreen = ({}: LoginScreenProps) => {
  const recoilSlide = useRecoilValue(loginSlideState);

  return (
    <Carousel
      slides={[EmailSlide, EmailConfirmationSlide]}
      recoilSlide={recoilSlide}
    />
  );
};

export default LoginScreen;
