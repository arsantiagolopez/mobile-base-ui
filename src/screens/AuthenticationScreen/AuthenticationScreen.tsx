import Carousel from "@/components/Carousel";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import ActionButtons from "./ActionButtons";

type AuthenticationScreenProps = {};

const AuthenticationScreen = ({}: AuthenticationScreenProps) => {
  return (
    <div className="relative">
      <Carousel
        slides={[FirstSlide, SecondSlide, ThirdSlide]}
        // autoSwitch
        switchTimeout={10000}
      />
      <ActionButtons />
    </div>
  );
};

export default AuthenticationScreen;
