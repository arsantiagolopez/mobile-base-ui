import { onboardingSlideState } from "@/recoil";
import { useRecoilValue } from "recoil";
import Carousel from "@/components/Carousel";
import EmailSlide from "./EmailSlide";
import EmailConfirmationSlide from "./EmailConfirmationSlide";
import EmailSuccessSlide from "./EmailSuccessSlide";
import UsernameSlide from "./UsernameSlide";
import OnboardingSuccessSlide from "./OnboardingSuccessSlide";

type OnboardingScreenProps = {};

const OnboardingScreen = ({}: OnboardingScreenProps) => {
  const recoilSlide = useRecoilValue(onboardingSlideState);

  return (
    <Carousel
      slides={[
        EmailSlide,
        EmailConfirmationSlide,
        EmailSuccessSlide,
        UsernameSlide,
        OnboardingSuccessSlide,
      ]}
      recoilSlide={recoilSlide}
    />
  );
};

export default OnboardingScreen;
