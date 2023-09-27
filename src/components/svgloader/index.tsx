import React from 'react';
import {SvgXml, XmlProps} from 'react-native-svg';

const SvgLoader = ({width = 24, height = 24, ...rest}: XmlProps) => {
  return <SvgXml width={width} height={height} {...rest} />;
};

export default SvgLoader;
