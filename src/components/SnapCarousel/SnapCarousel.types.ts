import React from 'react';
import {ListRenderItem} from 'react-native';
import Carousel, {
  AdditionalParallaxProps,
  CarouselProps,
} from 'react-native-snap-carousel';

export interface ISnapCarousel
  extends Omit<CarouselProps<any>, 'ref' | 'renderItem'> {
  renderItem: ListRenderItem<any> &
    ((
      item: {item: any; index: number},
      parallaxProps?: AdditionalParallaxProps | undefined,
    ) => React.ReactNode);
  carouselRef: React.RefObject<Carousel<{}>>;
}
