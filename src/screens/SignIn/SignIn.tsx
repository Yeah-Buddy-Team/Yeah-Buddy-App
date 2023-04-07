import React from 'react';
import { Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import KakaoSignInBtn from '../../assets/images/KakaoSignInBtn.png';
import TextLogo from '../../assets/images/TextLogo.png';
import { Text, View } from '../../components/Common';
import { COLORS } from '../../constants';
import { useSignIn } from './useSignIn';
import { INDIGO, WHITE } from '../../constants/Theme';

export function SignIn() {
  const { width: WIDTH } = useWindowDimensions();
  const { signInWithKakao } = useSignIn();

  return (
    <View
      safe
      fill
      style={{
        backgroundColor: COLORS.INDIGO[500],
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        source={TextLogo}
        style={{
          resizeMode: 'contain',
          width: '71.5%',
          top: '30%',
        }}
      />
      <View
        style={{
          marginBottom: '14.7%',
        }}
      >
        <View style={{ width: WIDTH - 40 }}>
          <Text color={WHITE} subtitle semibold style={{ marginBottom: 14 }}>
            환영합니다
          </Text>
          <Text color={INDIGO[100]} body3 style={{ marginBottom: 23 }}>
            로그인하여 Yeah Buddy를 이용해 보세요!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 48,
          }}
          onPress={signInWithKakao}
          activeOpacity={0.8}
        >
          <Image
            source={KakaoSignInBtn}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
