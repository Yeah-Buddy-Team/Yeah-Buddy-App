import KakaoSDK from '@actbase/react-kakaosdk';
import React from 'react';
import { Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import KakaoLoginBtn from '../../assets/images/KakaoLoginBtn.png';
import Logo from '../../assets/images/Logo.png';
import View from '../../components/Common/View/View';
import { INDIGO } from '../../constants';
import Config from 'react-native-config';

export function SignIn() {
  const { width: WIDTH } = useWindowDimensions();

  const onPressKakaoSignInBtn = async () => {
    try {
      await KakaoSDK.init(Config.KAKAO_NATIVE_APP_KEY);
      const tokens = await KakaoSDK.login();
      console.log(tokens);
    } catch (e: any) {
      console.error(e);
    }
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
          source={KakaoLoginBtn}
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
