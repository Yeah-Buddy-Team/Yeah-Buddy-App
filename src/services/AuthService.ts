import KakaoSDK from '@actbase/react-kakaosdk';
import Config from 'react-native-config';
import { AuthAPI } from '../api';
import { getItemEncryptedStorage, setItemEncryptedStorage } from '../utils';

export const autoSignIn = async () => {
  try {
    const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');
    const refreshToken = await getItemEncryptedStorage('REFRESH_TOKEN');

    if (!accessToken || !refreshToken) return false;

    const result = await AuthAPI.postKaKaoSignIn({
      accessToken: accessToken,
      refreshToken: refreshToken,
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const kakaoSignIn = async () => {
  try {
    await KakaoSDK.init(Config.KAKAO_NATIVE_APP_KEY);
    const tokens = await KakaoSDK.login();

    if (!tokens?.access_token || !tokens?.refresh_token) return;

    const result = AuthAPI.postKaKaoSignIn({
      accessToken: 'Bearer ' + tokens.access_token,
      refreshToken: 'Bearer ' + tokens.refresh_token,
    })
      .then(data => {
        setItemEncryptedStorage('ACCESS_TOKEN', data.accessToken);
        setItemEncryptedStorage('REFRESH_TOKEN', data.refreshToken);
        return true;
      })
      .catch(() => {
        return false;
      });

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getProfile = async () => {
  try {
    const result = AuthAPI.getProfile();

    return result;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const putName = async (newName: string) => {
  try {
    await AuthAPI.putName(newName);
  } catch (e: any) {
    console.error(e.message);
  }
};
