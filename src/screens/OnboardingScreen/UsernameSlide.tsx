import { type ChangeEventHandler, useState } from "react";
import { Slide, SlideHeader } from "@/components/Carousel";
import Input from "@/components/Input";
import { useRecoilStateClient } from "@/hooks/recoil";
import {
  DEFAULT_USERNAME_STATE,
  onboardingSlideState,
  usernameState,
} from "@/recoil";
import { delay } from "@/utils/delay";
import { IconAt } from "@tabler/icons-react";
import { useRecoilState } from "recoil";

type UsernameSlideProps = {};

const UsernameSlide = ({}: UsernameSlideProps) => {
  const [onboardingSlide, setOnboardingSlide] =
    useRecoilState(onboardingSlideState);
  const [usernameValue, setUsernameValue] = useRecoilStateClient(
    usernameState,
    DEFAULT_USERNAME_STATE
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsernameValue(event.target.value);
  };

  const handleNextSlide = async () => {
    setIsSubmitting(true);

    await delay(2000);

    setIsSubmitting(false);
    setIsSubmitted(true);

    await delay(1000);

    setOnboardingSlide(onboardingSlide + 1);
  };

  return (
    <Slide className="flex flex-col gap-2">
      <SlideHeader
        header="Username"
        isBackHidden
        isForwardDisabled={!usernameValue}
        isForwardLoading={isSubmitting}
        isForwardSuccess={isSubmitted}
        onForwardClick={handleNextSlide}
      />

      <div className="px-5">
        <Input
          variant="solid"
          spellCheck={false}
          value={usernameValue}
          onChange={handleChange}
          label="Your username"
          placeholder="johndoe"
          helperText="Enter a unique username"
          helperIcon={IconAt}
        />
      </div>
    </Slide>
  );
};

export default UsernameSlide;
