import { type ChangeEventHandler, useState } from "react";
import { Slide, SlideHeader } from "@/components/Carousel";
import Input from "@/components/Input";
import { useRecoilStateClient, useRecoilValueClient } from "@/hooks/recoil";
import {
  DEFAULT_EMAIL_STATE,
  DEFAULT_LOGIN_STATE,
  emailState,
  loginSlideState,
  loginState,
} from "@/recoil";
import { useRecoilState } from "recoil";
import { delay } from "@/utils/delay";
import { IconMail } from "@tabler/icons-react";
import { useRouter } from "next/router";

type EmailConfirmationSlideProps = {};

const EmailConfirmationSlide = ({}: EmailConfirmationSlideProps) => {
  const [loginSlide, setLoginSlide] = useRecoilState(loginSlideState);
  const email = useRecoilValueClient(emailState, DEFAULT_EMAIL_STATE);
  const [_, setIsLoggedIn] = useRecoilStateClient(
    loginState,
    DEFAULT_LOGIN_STATE
  );

  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();

  const handleChangeCode: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCode(event.target.value);
  };

  const handleBackSlide = () => {
    setLoginSlide(loginSlide - 1);
  };

  const handleGoHome = async () => {
    setIsSubmitting(true);

    await delay(2000);

    setIsSubmitting(false);
    setIsSubmitted(true);

    await delay(1000);

    setIsLoggedIn(true);
    setLoginSlide(0);
    router.push("/");
  };

  return (
    <Slide className="flex flex-col gap-4">
      <SlideHeader
        header="Confirmation code"
        isBackHidden={false}
        isForwardDisabled={!code}
        onBackClick={handleBackSlide}
        onForwardClick={handleGoHome}
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
