// import KakaoSDK from '@actbase/react-kakaosdk';
import React from 'react';
import {
  Image,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import KaKaoLoginBtn from '../../assets/images/KaKaoLoginBtn.png';
import Logo from '../../assets/images/Logo.png';
// import { Alert } from 'react-native';
import View from '../../components/Common/View/View';
import { INDIGO } from '../../constants';

export function SignIn() {
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       await KakaoSDK.init('7b128fe0c9143e58ce2b8a9e75a7f979');
  //       const tokens = await KakaoSDK.login();
  //       Alert.alert(tokens?.access_token || 'asdf');
  //     } catch (e: any) {
  //       Alert.alert(e.message);
  //     }
  //   })();
  // });
  const { width: WIDTH } = useWindowDimensions();

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
        onPress={() => console.log(1)}
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
