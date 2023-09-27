import React, {useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {styles} from './styles';
import {IProductCarousel} from './ProductCarousel.types';
import SnapCarousel from '../SnapCarousel/indes';
import useCarousel from '../SnapCarousel/useCarousel';

const ProductCarousel = ({images, style, ...rest}: IProductCarousel) => {
  const {carouselRef} = useCarousel();
  const [sliderIndex, setSliderIndex] = useState(0);
  return (
    <View style={[styles.container, style]} {...rest}>
      <SnapCarousel
        carouselRef={carouselRef}
        data={images}
        itemWidth={Dimensions.get('window').width - 48}
        sliderWidth={Dimensions.get('window').width - 48}
        sliderHeight={336}
        itemHeight={336}
        onSnapToItem={setSliderIndex}
        containerCustomStyle={styles.container}
        renderItem={item => {
          return (
            <Image
              key={item.index.toString()}
              source={item.item}
              style={styles.image}
            />
          );
        }}
      />
      <View style={styles.pagination}>
        {images.map((item, index) => {
          const color = index === sliderIndex ? styles.active : null;
          return (
            <View key={index.toString()}>
              <View style={[styles.dots, color]} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProductCarousel;
