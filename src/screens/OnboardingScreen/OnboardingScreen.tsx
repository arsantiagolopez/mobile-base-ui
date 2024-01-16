import { onboardingSlideState } from "@/recoil";
import Carousel from "@/components/Carousel";
import EmailSlide from "./EmailSlide";
import EmailConfirmationSlide from "./EmailConfirmationSlide";
import EmailSuccessSlide from "./EmailSuccessSlide";
import UsernameSlide from "./UsernameSlide";
import OnboardingSuccessSlide from "./OnboardingSuccessSlide";

type OnboardingScreenProps = {};

const OnboardingScreen = ({}: OnboardingScreenProps) => {
  return (
    <Carousel
      slides={[
        EmailSlide,
        EmailConfirmationSlide,
        EmailSuccessSlide,
        UsernameSlide,
        OnboardingSuccessSlide,
      ]}
      recoilState={onboardingSlideState}
    />
  );
};

export default OnboardingScreen;
