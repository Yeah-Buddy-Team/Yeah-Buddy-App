import { ColorValue, Text, TextProps, TextStyle } from 'react-native';
import { BLACK } from '../../../constants';

export enum FontWeight {
  Regular = '400',
  Medium = '500',
  Semibold = '600',
}

export enum FontSize {
  Subtitle = 'Subtitle',
  Body = 'Body',
  Body2 = 'Body2',
  Body3 = 'Body3',
  Caption = 'Caption',
  Caption2 = 'Caption2',
}

const Size = {
  [FontSize.Subtitle]: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
  },
  [FontSize.Body]: {
    fontSize: 18,
    lineHeight: 18 * 1.45,
  },
  [FontSize.Body2]: {
    fontSize: 16,
    lineHeight: 16 * 1.6,
  },
  [FontSize.Body3]: {
    fontSize: 14,
    lineHeight: 14 * 1.6,
  },
  [FontSize.Caption]: {
    fontSize: 12,
    lineHeight: 12 * 1.5,
  },
  [FontSize.Caption2]: {
    fontSize: 10,
    lineHeight: 10 * 1.0,
  },
};

type Props = TextProps & {
  children: React.ReactNode;
  style?: TextStyle;
  color?: ColorValue;
  underline?: boolean;
  // FontWeight
  light?: boolean;
  medium?: boolean;
  semibold?: boolean;
  // FontSize
  subtitle?: boolean;
  body2?: boolean;
  body3?: boolean;
  caption?: boolean;
  caption2?: boolean;
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
    // FontSize
    subtitle,
    body2,
    body3,
    caption,
    caption2,
    ...rest
  } = props;

  const fontWeight =
    (medium && FontWeight.Medium) ||
    (semibold && FontWeight.Semibold) ||
    FontWeight.Regular;

  const fontSize =
    Size[
      (subtitle && FontSize.Subtitle) ||
        (body2 && FontSize.Body2) ||
        (body3 && FontSize.Body3) ||
        (caption && FontSize.Caption) ||
        (caption2 && FontSize.Caption2) ||
        FontSize.Body
    ];

  const textDecorationLine = underline ? 'underline' : 'none';
  const color = customColor || BLACK;

  const style: TextStyle = {
    fontWeight,
    ...fontSize,
    textDecorationLine,
    color,
  };

  return (
    <Text style={[style, customStyle]} {...rest}>
      {children}
    </Text>
  );
}
