import { ColorValue, Text, TextProps, TextStyle } from 'react-native';
import { BLACK } from '../../../constants';

export enum FontWeight {
  LIGHT = '300',
  REGULAR = '400',
  MEDIUM = '500',
  SEMIBOLD = '600',
  BOLD = '700',
  EXTRABOLD = '800',
  BLACK = '900',
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
  bold?: boolean;
  extrabold?: boolean;
  black?: boolean;
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
    bold,
    extrabold,
    black,
    ...rest
  } = props;

  const fontWeight =
    (light && FontWeight.LIGHT) ||
    (medium && FontWeight.MEDIUM) ||
    (semibold && FontWeight.SEMIBOLD) ||
    (bold && FontWeight.BOLD) ||
    (extrabold && FontWeight.EXTRABOLD) ||
    (black && FontWeight.BLACK) ||
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
