import Button from "@/components/Button";
import { Slide } from "@/components/Carousel";
import { ChangeEventHandler, useEffect, useState } from "react";
import SlideHeader from "./SlideHeader";
import Input from "@/components/Input";
import {
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconBrandTwitterFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import clsx from "clsx";
import { onboardingState } from "@/recoil";
import { useRecoilState } from "recoil";
import { delay } from "@/utils/delay";

type OAuthSlideProps = {};

const OAuthSlide = ({}: OAuthSlideProps) => {
  const [isLocalActive, setIsLocalActive] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [_, setIsOnboarding] = useRecoilState(onboardingState);

  const socials = [
    { id: "google", icon: IconBrandGoogleFilled, label: "Google" },
    { id: "twitter", icon: IconBrandTwitterFilled, label: "Twitter" },
    { id: "facebook", icon: IconBrandFacebookFilled, label: "Facebook" },
  ];

  const transitionClasses = showInputs
    ? "translate-y-0 opacity-100"
    : "-translate-y-5 opacity-0";

  const handleSetLocalActive = () => {
    setIsLocalActive(true);
  };

  const handleSetOnboarding = async () => {
    setIsSubmitting(true);

    await delay(2000);

    setIsSubmitting(false);
    setIsSubmitted(true);

    await delay(1000);

    setIsOnboarding(true);
  };

  const handleGoBack = () => {
    setEmailValue("");
    setPasswordValue("");
    setShowInputs(false);
    setIsLocalActive(false);
  };

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmailValue(event.target.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPasswordValue(event.target.value);
  };

  const header = isLocalActive ? "Email" : "Sign up";

  useEffect(() => {
    if (isLocalActive) {
      setShowInputs(true);
    }
  }, [isLocalActive]);

  return (
    <Slide className="flex flex-col gap-2">
      {/* Header */}
      <SlideHeader
        header={header}
        isBackHidden={!isLocalActive}
        isForwardHidden={!isLocalActive}
        isForwardDisabled={!emailValue || !passwordValue}
        isForwardLoading={isSubmitting}
        isForwardSuccess={isSubmitted}
        onBackClick={handleGoBack}
        onForwardClick={handleSetOnboarding}
      />

      {/* Content */}
      <div className="flex flex-col px-6 gap-4">
        {/* Local */}
        {isLocalActive ? (
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              spellCheck={false}
              placeholder="Email"
              className="text-tertiary h-14"
              value={emailValue}
              onChange={handleChangeEmail}
            />
            <Input
              type="password"
              placeholder="Password"
              className={clsx(
                "text-tertiary transition ease-out duration-300 h-14",
                transitionClasses
              )}
              value={passwordValue}
              onChange={handleChangePassword}
            />
          </div>
        ) : (
          <Button
            variant="outline"
            onClick={handleSetLocalActive}
            className="relative flex items-center gap-2 p-4 h-14"
          >
            <IconMailFilled size={16} color="#1e1e1e" />
            Email & password
          </Button>
        )}

        {/* Divider */}
        {!isLocalActive && (
          <p className="text-sm text-tertiary text-center -my-2">or</p>
        )}

        {/* Socials */}
        {!isLocalActive && (
          <div className="flex flex-col gap-4">
            {socials.map(({ id, icon, label }) => {
              const Icon = icon;
              return (
                <Button
                  key={id}
                  theme="light"
                  onClick={handleSetOnboarding}
                  className="flex items-center gap-2 p-4 !text-tertiary h-14"
                >
                  <Icon size={16} color="#1e1e1e" />
                  {label}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </Slide>
  );
};

export default OAuthSlide;
