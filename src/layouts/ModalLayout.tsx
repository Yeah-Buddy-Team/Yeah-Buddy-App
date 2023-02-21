import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';
import { View } from '../components/Common';

type Props = {
  children?: React.ReactNode;
};

export function ModalLayout(props: Props) {
  const { children } = props;

  const navigation = useNavigation();

  return (
    <View fill>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(34, 34, 34, 0.24)',
          },
        ]}
        onPress={() => navigation.goBack()}
      >
        {children}
      </Pressable>
    </View>
  );
}
