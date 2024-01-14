import Image from "next/image";
import { Slide } from "@/components/Carousel";

type ThirdSlideProps = {};

const ThirdSlide = ({}: ThirdSlideProps) => {
  return (
    <Slide className="relative flex flex-col gap-20 p-6 pt-12">
      <div className="flex flex-col gap-5">
        <h1 className="headline">Win? Cha-ching.</h1>
        <h2 className="headline-description">
          Expand your reach, monetize your passion, and claim 100% of your tips!
        </h2>
      </div>

      <Image
        alt="Slide 3"
        src="/assets/images/authentication/authentication_slide_3.gif"
        width={400}
        height={400}
        layout="responsive"
        objectFit="cover"
        className="max-w-[400px]"
      />
    </Slide>
  );
};

export default ThirdSlide;
