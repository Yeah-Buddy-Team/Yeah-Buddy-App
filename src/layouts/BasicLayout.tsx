import { ViewStyle } from 'react-native';

import { View } from '../components/Common';
import * as COLORS from '../constants/Theme';

type Props = {
  style?: ViewStyle;
  children?: React.ReactNode;
};

export function BasicLayout(props: Props) {
  const { children, style: customStyle } = props;

  return (
    <View style={customStyle} fill safe>
      {children}
    </View>
  );
}
