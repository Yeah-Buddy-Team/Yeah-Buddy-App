import KakaoSDK from '@actbase/react-kakaosdk';
import Config from 'react-native-config';
import { AuthAPI } from '../api';
import { setItemEncryptedStorage } from '../utils';

export const kakaoSignIn = async () => {
  try {
    await KakaoSDK.init(Config.KAKAO_NATIVE_APP_KEY);
    const tokens = await KakaoSDK.login();

    if (!tokens?.access_token || !tokens?.refresh_token) return;

    AuthAPI.postKaKaoSignIn({
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
    }).then(data => {
      setItemEncryptedStorage('ACCESS_TOKEN', data.accessToken);
      setItemEncryptedStorage('REFRESH_TOKEN', data.refreshToken);
    });
  } catch (e: any) {
    console.error(e.message);
  }
};
