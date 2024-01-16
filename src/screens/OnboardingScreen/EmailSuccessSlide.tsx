import Image from "next/image";
import { useRecoilState } from "recoil";
import { onboardingSlideState } from "@/recoil";
import Button from "@/components/Button";
import { Slide } from "@/components/Carousel";

type EmailSuccessSlideProps = {};

const EmailSuccessSlide = ({}: EmailSuccessSlideProps) => {
  const [onboardingSlide, setOnboardingSlide] =
    useRecoilState(onboardingSlideState);

  const handleNextSlide = () => {
    setOnboardingSlide(onboardingSlide + 1);
  };

  return (
    <Slide className="relative flex flex-col items-center justify-between p-6 py-20">
      <div className="flex flex-col items-center w-full gap-10">
        <h1 className="headline">You're in!</h1>

        <Image
          alt="Slide 1"
          src="/assets/images/onboarding/onboarding_email_success.svg"
          width={400}
          height={400}
          layout="responsive"
          objectFit="cover"
          className="max-w-[400px]"
        />

        <h2 className="headline-description">
          Now let's quickly get you onboarded.
        </h2>
      </div>

      <Button onClick={handleNextSlide} className="py-4 px-5">
        Let's go
      </Button>
    </Slide>
  );
};

export default EmailSuccessSlide;
