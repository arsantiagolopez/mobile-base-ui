import { Slide } from "@/components/Carousel";
import SlideHeader from "./SlideHeader";

type UsernameSlideProps = {};

const UsernameSlide = ({}: UsernameSlideProps) => {
  const header = "Choose your username";

  return (
    <Slide className="flex flex-col gap-2">
      {/* Header */}
      <SlideHeader
        header={header}
        // isForwardHidden={!isLocalActive}
        // isForwardDisabled={!emailValue || !passwordValue}
        // isForwardLoading={isSubmitting}
        // isForwardSuccess={isSubmitted}
        // onBackClick={handleGoBack}
        // onForwardClick={handleSetOnboarding}
      />
    </Slide>
  );
};

export default UsernameSlide;
