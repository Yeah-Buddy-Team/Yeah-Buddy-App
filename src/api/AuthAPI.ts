import { AxiosResponse } from 'axios';
import { getItemEncryptedStorage } from '../utils';
import { GET_PROFILE, POST_KAKAO_SIGN_IN } from './CONSTANTS';
import axios from './default';

type PostKakaoSignInParams = {
  accessToken: string;
  refreshToken: string;
};

export const postKaKaoSignIn = async (params: PostKakaoSignInParams) => {
  const url = POST_KAKAO_SIGN_IN(params.accessToken, params.refreshToken);

  const response = await axios
    .post(url)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });

  return response;
};

export const getProfile = async (): Promise<{
  name: string;
  profileImageUrl: string;
}> => {
  const url = GET_PROFILE();

  const accessToken = await getItemEncryptedStorage('ACCESS_TOKEN');

  const response = await axios
    .get(url, {
      headers: {
        Authorization: accessToken,
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });

  return response;
};
