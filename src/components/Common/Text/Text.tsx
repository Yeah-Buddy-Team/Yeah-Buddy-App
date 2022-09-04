import { ColorValue, Text, TextProps, TextStyle } from 'react-native';
import { BLACK } from '../../../constants';

export enum FontWeight {
  REGULAR = '400',
  MEDIUM = '500',
  SEMIBOLD = '600',
}

type Props = TextProps & {
  children: React.ReactElement;
  style?: TextStyle;
  color?: ColorValue;
  underline?: boolean;
  // FontWeight
  light?: boolean;
  medium?: boolean;
  semibold?: boolean;
};

export default function (props: Props) {
  const {
    children,
    style: customStyle,
    color: customColor,
    underline,
    // FontWeight
    light,
    medium,
    semibold,
    ...rest
  } = props;

  const fontWeight =
    (medium && FontWeight.MEDIUM) ||
    (semibold && FontWeight.SEMIBOLD) ||
    FontWeight.REGULAR;

  const textDecorationLine = underline ? 'underline' : 'none';
  const color = customColor || BLACK;

  const style: TextStyle = {
    fontWeight,
    textDecorationLine,
    color,
  };

  return (
    <Text style={[style, customStyle]} {...rest}>
      {children}
    </Text>
  );
}
