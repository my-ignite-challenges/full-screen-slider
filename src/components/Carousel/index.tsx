import { useEffect, useRef, useState } from "react";
import { CarouselControls } from "../CarouselControls";
import { Carouselindicators } from "../CarouselIndicators";
import { CarouselItem } from "../CarouselItem";

import { styles } from "./styles";

type Props = {
  slides: string[];
  showControls?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
};

export function Carousel({
  slides,
  showIndicators = false,
  showControls = false,
  interval = 5000,
  autoPlay = true,
}: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(3);

  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const showPreviousSlide = () => {
    startSlideTimer();
    const index =
      currentSlideIndex > 0 ? currentSlideIndex - 1 : slides.length - 1;

    setCurrentSlideIndex(index);
  };

  const showNextSlide = () => {
    startSlideTimer();
    const index =
      currentSlideIndex < slides.length - 1 ? currentSlideIndex + 1 : 0;

    setCurrentSlideIndex(index);
  };

  const switchIndex = (index: number) => {
    startSlideTimer();

    setCurrentSlideIndex(index);
  };

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = setInterval(() => {
        setCurrentSlideIndex((currentSlide) =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  };

  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.carouselInner,
          transform: `translateX(${-currentSlideIndex * 100}%)`,
        }}
        className="carousel-inner"
      >
        {slides.map((slide, index) => (
          <CarouselItem
            slide={slide}
            key={index}
            startSlideTimer={startSlideTimer}
            stopSlideTimer={stopSlideTimer}
          />
        ))}
      </div>
      {showIndicators && (
        <Carouselindicators
          slides={slides}
          currentSlideIndex={currentSlideIndex}
          switchIndex={switchIndex}
        />
      )}

      {showControls && (
        <CarouselControls
          showPreviousSlide={showPreviousSlide}
          showNextSlide={showNextSlide}
        />
      )}
    </div>
  );
}
