import {
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { COLORS } from '../../../constants';
import { Text } from '../Text';

type Props = TouchableOpacityProps & {
  children: string;
  style?: TextProps;
  containerStyle?: ViewStyle;
};

export default function (props: Props) {
  const {
    children,
    style: customStyle,
    containerStyle: customContainerStyle,
    ...rest
  } = props;

  const containerStyle: ViewStyle = {
    width: '100%',
    height: 47,
    borderRadius: 4,
    backgroundColor: COLORS.INDIGO[500],
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <TouchableOpacity
      style={[containerStyle, customContainerStyle]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={customStyle} semibold body2 color={COLORS.WHITE}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
