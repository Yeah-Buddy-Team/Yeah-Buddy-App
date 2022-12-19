import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import KakaoSignInBtn from '../../assets/images/KakaoSignInBtn.png';
import Logo from '../../assets/images/Logo.png';
import { View } from '../../components/Common';
import { INDIGO } from '../../constants';
import { AuthService } from '../../services';
import { RootStack, RootStackNavigationProps } from '../../types/System';

export function SignIn() {
  const { width: WIDTH } = useWindowDimensions();
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.SignIn]>();

  const onPressKakaoSignInBtn = async () => {
    await AuthService.kakaoSignIn();
    navigation.push(RootStack.Root);
  };

  return (
    <View
      safe
      fill
      style={{
        backgroundColor: INDIGO[500],
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        source={Logo}
        style={{
          resizeMode: 'contain',
          width: 72,
          height: 111,
          top: '30%',
        }}
      />
      <TouchableOpacity
        style={{
          width: WIDTH - 40,
          height: 48,
          marginBottom: '14.7%',
        }}
        onPress={onPressKakaoSignInBtn}
        activeOpacity={0.7}
      >
        <Image
          source={KakaoSignInBtn}
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: '100%',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
