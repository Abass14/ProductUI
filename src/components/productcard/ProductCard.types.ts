import {PressableProps, StyleProp, ViewStyle} from 'react-native';

export interface IProductCard extends Omit<PressableProps, 'style'> {
  style?: StyleProp<ViewStyle>;
  onAddToCart?: () => void;
  onFavorite?: () => void;
  product: IProduct;
}

export interface IProduct {
  images: any[];
  productName: string;
  alternativeName: string;
  price: number;
  currency: string;
  attributes: string[];
}
