import KakaoSDK from '@actbase/react-kakaosdk';
import Config from 'react-native-config';
import { AuthHelper } from '../helpers';

export const kakaoSignIn = async () => {
  try {
    await KakaoSDK.init(Config.KAKAO_NATIVE_APP_KEY);
    const tokens = await KakaoSDK.login();

    if (!tokens?.access_token || !tokens?.refresh_token) return;

    const response = AuthHelper.postKaKaoSignIn({
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
    });
  } catch (e: any) {
    console.error(e.message);
  }
};
