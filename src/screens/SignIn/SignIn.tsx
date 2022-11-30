import KakaoSDK from '@actbase/react-kakaosdk';
import React from 'react';
import { Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import KaKaoLoginBtn from '../../assets/images/KaKaoLoginBtn.png';
import Logo from '../../assets/images/Logo.png';
import View from '../../components/Common/View/View';
import { INDIGO } from '../../constants';

export function SignIn() {
  const { width: WIDTH } = useWindowDimensions();

  const onPressKakaoSignInBtn = async () => {
    try {
      await KakaoSDK.init('7b128fe0c9143e58ce2b8a9e75a7f979');
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
          source={KaKaoLoginBtn}
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
