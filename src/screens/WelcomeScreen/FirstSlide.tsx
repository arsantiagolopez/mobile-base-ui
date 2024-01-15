import Image from "next/image";
import { Slide } from "@/components/Carousel";

type FirstSlideProps = {};

const FirstSlide = ({}: FirstSlideProps) => {
  return (
    <Slide className="relative flex flex-col gap-20 p-6 pt-12">
      <div className="flex flex-col gap-5">
        <h1 className="headline">A social tracker.</h1>
        <h2 className="headline-description">
          Keep track of your bets, share with your friends and compete for
          prizes.
        </h2>
      </div>

      <Image
        alt="Slide 1"
        src="/assets/images/authentication/authentication_slide_1.gif"
        width={400}
        height={400}
        layout="responsive"
        objectFit="cover"
        className="max-w-[400px]"
      />
    </Slide>
  );
};

export default FirstSlide;
