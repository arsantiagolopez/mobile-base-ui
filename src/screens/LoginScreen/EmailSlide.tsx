import type { ChangeEventHandler } from "react";
import { Slide, SlideHeader } from "@/components/Carousel";
import Input from "@/components/Input";
import { useRecoilStateClient } from "@/hooks/recoil";
import { DEFAULT_EMAIL_STATE, emailState, loginSlideState } from "@/recoil";
import { useRecoilState } from "recoil";
import { IconInfoCircle } from "@tabler/icons-react";

type EmailSlideProps = {};

const EmailSlide = ({}: EmailSlideProps) => {
  const [loginSlide, setLoginSlide] = useRecoilState(loginSlideState);
  const [emailValue, setEmailValue] = useRecoilStateClient(
    emailState,
    DEFAULT_EMAIL_STATE
  );

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmailValue(event.target.value);
  };

  const handleNextSlide = () => {
    setLoginSlide(loginSlide + 1);
  };

  return (
    <Slide className="flex flex-col gap-4">
      <SlideHeader
        header="Email"
        isBackHidden={true}
        isForwardDisabled={!emailValue}
        onForwardClick={handleNextSlide}
      />

      <div className="px-5">
        <Input
          variant="solid"
          type="email"
          spellCheck={false}
          value={emailValue}
          onChange={handleChangeEmail}
          label="Your email"
          placeholder="johndoe@example.com"
          helperText="We'll send you a confirmation code."
          helperIcon={IconInfoCircle}
        />
      </div>
    </Slide>
  );
};

export default EmailSlide;
