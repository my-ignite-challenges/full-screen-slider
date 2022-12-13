import { styles } from "./styles";

type Props = {
  slide: string;
  startSlideTimer: () => void;
  stopSlideTimer: () => void;
};

export function CarouselItem({
  slide,
  startSlideTimer,
  stopSlideTimer,
}: Props) {
  return (
    <div
      style={styles.carouselItem}
      onMouseEnter={stopSlideTimer}
      onMouseOut={startSlideTimer}
    >
      <img style={styles.image} src={slide} alt="Slide" />
    </div>
  );
}
