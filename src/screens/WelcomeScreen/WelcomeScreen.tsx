import Carousel from "@/components/Carousel";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import AuthButtons from "./AuthButtons";

type WelcomeScreenProps = {};

const WelcomeScreen = ({}: WelcomeScreenProps) => {
  return (
    <div className="relative">
      <Carousel
        slides={[FirstSlide, SecondSlide, ThirdSlide]}
        withDots
        autoSwitch
        switchTimeout={5000}
      />
      <AuthButtons />
    </div>
  );
};

export default WelcomeScreen;
