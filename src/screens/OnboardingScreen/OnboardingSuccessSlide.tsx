import Image from "next/image";
import Button from "@/components/Button";
import { Slide } from "@/components/Carousel";
import { useRouter } from "next/router";
import { IconX } from "@tabler/icons-react";
import { useRecoilStateClient } from "@/hooks/recoil";
import { DEFAULT_LOGIN_STATE, loginState } from "@/recoil";

type OnboardingSuccessSlideProps = {};

const OnboardingSuccessSlide = ({}: OnboardingSuccessSlideProps) => {
  const [_, setIsLoggedIn] = useRecoilStateClient(
    loginState,
    DEFAULT_LOGIN_STATE
  );

  const router = useRouter();

  const handleGoHome = () => {
    setIsLoggedIn(true);
    router.push("/");
  };

  return (
    <Slide className="relative flex flex-col items-center justify-between p-6 py-20">
      <Button
        onClick={handleGoHome}
        variant="unstyled"
        className="absolute top-6 left-6 rounded-xl md:p-1 md:hover:bg-secondary"
      >
        <IconX size={30} color="white" />
      </Button>

      <div className="flex flex-col items-center w-full gap-10">
        <h1 className="headline">That&apos;s all</h1>

        <Image
          alt="Slide 1"
          src="/assets/images/onboarding/onboarding_success.gif"
          width={400}
          height={400}
          layout="responsive"
          objectFit="cover"
          className="max-w-[400px]"
        />

        <h2 className="headline-description">Welcome to Pickstar.</h2>
      </div>

      <Button onClick={handleGoHome} className="py-4 px-5">
        Dashboard
      </Button>
    </Slide>
  );
};

export default OnboardingSuccessSlide;
