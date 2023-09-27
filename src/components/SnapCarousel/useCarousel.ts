import {useRef} from 'react';
import Carousel from 'react-native-snap-carousel';

export const useCarousel = () => {
  const carouselRef = useRef<Carousel<{}>>(null);

  const next = () => carouselRef.current?.snapToNext();
  const prev = () => carouselRef.current?.snapToPrev();
  const goToItem = (index: number) => carouselRef.current?.snapToItem(index);

  return {
    carouselRef,
    next,
    prev,
    goToItem,
  };
};

export default useCarousel;
