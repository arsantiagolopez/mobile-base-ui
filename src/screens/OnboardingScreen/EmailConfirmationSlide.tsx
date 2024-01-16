import { type ChangeEventHandler, useState } from "react";
import { Slide, SlideHeader } from "@/components/Carousel";
import Input from "@/components/Input";
import { useRecoilValueClient } from "@/hooks/recoil";
import {
  DEFAULT_EMAIL_STATE,
  emailState,
  onboardingSlideState,
} from "@/recoil";
import { useRecoilState } from "recoil";
import { delay } from "@/utils/delay";
import { IconMail } from "@tabler/icons-react";

type EmailConfirmationSlideProps = {};

const EmailConfirmationSlide = ({}: EmailConfirmationSlideProps) => {
  const [onboardingSlide, setOnboardingSlide] =
    useRecoilState(onboardingSlideState);
  const email = useRecoilValueClient(emailState, DEFAULT_EMAIL_STATE);

  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChangeCode: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCode(event.target.value);
  };

  const handleBackSlide = () => {
    setOnboardingSlide(onboardingSlide - 1);
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
    <Slide className="flex flex-col gap-4">
      <SlideHeader
        header="Confirmation code"
        isBackHidden={false}
        isForwardDisabled={!code}
        onBackClick={handleBackSlide}
        onForwardClick={handleNextSlide}
        isForwardLoading={isSubmitting}
        isForwardSuccess={isSubmitted}
      />

      <div className="px-5">
        <Input
          variant="solid"
          type="number"
          spellCheck={false}
          value={code}
          onChange={handleChangeCode}
          label="Your confirmation code"
          placeholder="000000"
          helperText={email}
          helperIcon={IconMail}
        />
      </div>
    </Slide>
  );
};

export default EmailConfirmationSlide;
