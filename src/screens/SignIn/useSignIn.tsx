import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { AuthService } from '../../services';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useSignIn = () => {
  const { width: WIDTH } = useWindowDimensions();
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.SignIn]>();

  const signInWithKakao = async () => {
    await AuthService.kakaoSignIn();
    navigation.push(RootStack.Root);
  };

  return {
    WIDTH,
    signInWithKakao,
  };
};
