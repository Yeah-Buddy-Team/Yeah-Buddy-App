import KakaoSDK from '@actbase/react-kakaosdk';
import React from 'react';
import { Alert } from 'react-native';
import Text from '../../components/Common/Text/Text';

export function SignIn() {
  React.useEffect(() => {
    (async () => {
      try {
        await KakaoSDK.init('7b128fe0c9143e58ce2b8a9e75a7f979');
        const tokens = await KakaoSDK.login();
        Alert.alert(tokens?.access_token || 'asdf');
      } catch (e: any) {
        Alert.alert(e.message);
      }
    })();
  });

  return <Text>asdf</Text>;
}
