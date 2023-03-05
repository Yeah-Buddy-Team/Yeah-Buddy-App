import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AuthService } from '../../services';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export const useSignIn = () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.SignIn]>();

  React.useEffect(() => {
    (async () => {
      await autoSignIn();
    })();
  }, []);

  const autoSignIn = async () => {
    const result = await AuthService.autoSignIn();
    if (result) navigation.push(RootStack.Root);
  };

  const signInWithKakao = async () => {
    await AuthService.kakaoSignIn();
    navigation.push(RootStack.Root);
  };

  return {
    signInWithKakao,
  };
};
