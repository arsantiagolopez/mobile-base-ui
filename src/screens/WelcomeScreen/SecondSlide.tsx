import Image from "next/image";
import { Slide } from "@/components/Carousel";

type SecondSlideProps = {};

const SecondSlide = ({}: SecondSlideProps) => {
  return (
    <Slide className="relative flex flex-col gap-20 p-6 pt-12">
      <div className="flex flex-col gap-5">
        <h1 className="headline">Stay connected.</h1>
        <h2 className="headline-description">
          Share your sports bets, find tipsters, make money together.
        </h2>
      </div>

      <Image
        alt="Slide 2"
        src="/assets/images/authentication/authentication_slide_2.gif"
        width={400}
        height={400}
        layout="responsive"
        objectFit="cover"
        className="max-w-[400px]"
      />
    </Slide>
  );
};

export default SecondSlide;
