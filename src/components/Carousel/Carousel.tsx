import { useState, type FC } from "react";
import { useKeenSlider } from "keen-slider/react";
import clsx from "clsx";
import "keen-slider/keen-slider.min.css";

type CarouselProps = {
  slides: FC[];
  className?: string;
  autoSwitch?: boolean;
  infinite?: boolean;
  switchTimeout?: number;
};

const Carousel = ({
  slides,
  className,
  autoSwitch,
  infinite = true,
  switchTimeout = 5000,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: infinite ? true : false,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    // Plugin to auto switch slides
    autoSwitch
      ? [
          (slider) => {
            let timeout: NodeJS.Timeout;
            let mouseOver = false;

            const clearNextTimeout = () => clearTimeout(timeout);

            const nextTimeout = () => {
              clearTimeout(timeout);
              if (mouseOver) return;
              timeout = setTimeout(() => {
                slider.next();
              }, switchTimeout);
            };

            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true;
                clearNextTimeout();
              });
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false;
                nextTimeout();
              });
              nextTimeout();
            });

            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
          },
        ]
      : []
  );

  return (
    <div className={clsx("relative h-full", className)}>
      {/* Slides */}
      <div ref={sliderRef} className="keen-slider">
        {slides.map((Slide, index) => (
          <Slide key={index} />
        ))}
      </div>

      {/* Dots */}
      {loaded && instanceRef.current && (
        <div className="absolute top-5 left-5 flex items-center">
          {Array.from(
            { length: instanceRef.current.track.details.slides.length },
            (_, i) => i
          ).map((index) => (
            <button
              key={index}
              onClick={() => {
                instanceRef.current?.moveToIdx(index);
              }}
              className={clsx(
                "border-none w-2 h-2 rounded-full mx-1 p-1 cursor-pointer focus:outline-none",
                {
                  "bg-gray-600": currentSlide !== index,
                  "bg-white": currentSlide === index,
                }
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
