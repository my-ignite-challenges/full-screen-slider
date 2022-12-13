import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { styles } from "./styles";

type Props = {
  showPreviousSlide: () => void;
  showNextSlide: () => void;
};

export function CarouselControls({ showPreviousSlide, showNextSlide }: Props) {
  return (
    <div>
      <button
        style={{
          ...styles.control,
          left: 0,
        }}
        onClick={showPreviousSlide}
      >
        <MdChevronLeft size={24} />
      </button>
      <button
        style={{
          ...styles.control,
          right: 0,
        }}
        onClick={showNextSlide}
      >
        <MdChevronRight size={24} />
      </button>
    </div>
  );
}
