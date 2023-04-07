import { POST_KAKAO_SIGN_IN } from './CONSTANTS';
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
