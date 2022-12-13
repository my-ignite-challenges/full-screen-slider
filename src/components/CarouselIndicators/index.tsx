import { styles } from "./styles";

type Props = {
  slides: string[];
  currentSlideIndex: number;
  switchIndex: (index: number) => void;
};

export function Carouselindicators({
  slides,
  currentSlideIndex,
  switchIndex,
}: Props) {
  const activeStyles = {
    width: 32,
    height: 12,
    borderRadius: 12,
  };

  return (
    <div style={styles.container}>
      {slides.map((_, index) => (
        <button
          style={
            currentSlideIndex === index
              ? { ...styles.indicator, ...activeStyles }
              : styles.indicator
          }
          onClick={() => switchIndex(index)}
        />
      ))}
    </div>
  );
}
