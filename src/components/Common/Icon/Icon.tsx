import React from 'react';
import { ColorValue, ViewStyle } from 'react-native';

import IconMap from './IconMap';

import { Svg } from '../Svg';
import { View } from '../View';
import { COLORS } from '../../../constants';

type IconShapeType = 'filled' | 'outlined';

type Props = React.ComponentProps<typeof Svg> & {
  name: keyof typeof IconMap;
  size?: number;
  style?: ViewStyle;
  shape?: IconShapeType;
  fillColor?: ColorValue;
  strokeColor?: ColorValue;
  isStroke?: boolean;
};

type IconMapType = {
  [key: string]: {
    filled?: React.ReactNode;
    outlined?: React.ReactNode;
  };
};

export default function (props: Props) {
  const {
    name,
    shape = 'filled',
    size = 24,
    isStroke,
    fillColor = COLORS.BLACK,
    strokeColor = COLORS.BLACK,
    style: customStyle,
    ...rest
  } = props;

  const iconMap = IconMap as IconMapType;
  const icon = iconMap[name][shape] || IconMap[name].filled;

  const style: ViewStyle = {
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={[style, customStyle]}>
      <Svg
        style={{
          width: '100%',
          height: '100%',
        }}
        {...rest}
        fill={!isStroke ? fillColor : undefined}
        stroke={isStroke ? strokeColor : undefined}
      >
        {icon}
      </Svg>
    </View>
  );
}
