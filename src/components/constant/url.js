const OAUTH_URL = {
  GOOGLE:
    'https://workbooksapi.ga/oauth2/authorization/google?redirect_uri=https://workbooks.ga/oauth2/redirect',
  NAVER:
    'http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/oauth2/redirect',
  KAKAO:
    'http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth2/redirect',
  KAKAO_OPENID_DEV:
    'https://kauth.kakao.com/oauth/authorize?client_id=d3a0fd443a4f80222b5565e5eea4966e&redirect_uri=http://localhost:8080/api/auth/code/kakao&response_type=code',
  KAKAO_OPENID_DEV2:
    'https://kauth.kakao.com/oauth/authorize?client_id=d3a0fd443a4f80222b5565e5eea4966e&redirect_uri=http://localhost:3000/auth/kakao/callback&response_type=code',
  KAKAO_OPENID_DEV3: 'http://localhost:8080/api/auth/kakao',
};
export { OAUTH_URL };
