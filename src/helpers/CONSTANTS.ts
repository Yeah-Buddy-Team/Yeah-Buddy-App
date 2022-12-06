export const POST_KAKAO_SIGN_IN = (accessToken: string, refreshToken: string) =>
  `/login/oauth/KAKAO?accessToken=${accessToken}&refreshToken=${refreshToken}`;
