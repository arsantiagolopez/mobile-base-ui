import Carousel from "@/components/Carousel";
import OAuthSlide from "./OAuthSlide";
import UsernameSlide from "./UsernameSlide";

type OnboardingScreenProps = {};

const OnboardingScreen = ({}: OnboardingScreenProps) => {
  const handleChangeSlide = () => {
    console.log("😎😎😎 Changing slide....");
  };
  return (
    <>
      <Carousel
        slides={[OAuthSlide, UsernameSlide]}
        lockSwitching
        changeSlide={handleChangeSlide}
      />
      <button className="text-white">hello</button>
    </>
  );
};

export default OnboardingScreen;
