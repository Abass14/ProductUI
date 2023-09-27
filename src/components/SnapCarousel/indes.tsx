import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {ISnapCarousel} from './SnapCarousel.types';

const SnapCarousel = ({carouselRef, renderItem, ...rest}: ISnapCarousel) => {
  return (
    <Carousel
      removeClippedSubviews={false}
      ref={carouselRef}
      renderItem={renderItem}
      {...rest}
    />
  );
};

export default SnapCarousel;
