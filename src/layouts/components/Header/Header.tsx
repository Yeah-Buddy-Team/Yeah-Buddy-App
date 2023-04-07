import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { Icon, Text, View } from '../../../components/Common';

type Props = {
  containerStyle?: ViewStyle;
  title?: string;
  right?: React.ReactNode;
  back?: boolean;
};

export default function (props: Props) {
  const navigation = useNavigation();

  const {
    containerStyle: customContainerStyle,
    right,
    title,
    back = true,
  } = props;

  const contanierStyle: ViewStyle = {
    borderBottomWidth: 0.5,
    borderBottomColor: '#B6B6B8',
  };

  return (
    <View style={[contanierStyle, customContainerStyle]} safe>
      <View
        style={{
          alignItems: 'center',
          height: 59,
          paddingHorizontal: 24,
        }}
        row
      >
        <View style={{ alignItems: 'flex-start' }} fill>
          {back && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
            >
              <Icon name="Back" />
            </TouchableOpacity>
          )}
        </View>
        <Text semibold body2>
          {title}
        </Text>
        <View style={{ alignItems: 'flex-end' }} fill>
          {right}
        </View>
      </View>
    </View>
  );
}
