import { Container, Login, Text } from './LoginPage.styles';
import { default as googleIcon } from '../../assets/icons/google.svg';
import { default as kakaoIcon } from '../../assets/icons/kakao.svg';
import { default as naverIcon } from '../../assets/icons/naver.svg';

function LoginPage() {
  return (
    <Container>
      <GoogleLogin />
      <KakaoLogin />
      <NaverLogin />
    </Container>
  );
}

function GoogleLogin() {
  return (
    <Login href='https://workbooksapi.ga/oauth2/authorization/google?redirect_uri=https://workbooks.ga/oauth2/redirect'>
      <img src={googleIcon} width='40px' />
      <Text>구글로 로그인 하기</Text>
    </Login>
  );
}

function KakaoLogin() {
  return (
    <Login href='https://workbooksapi.ga/oauth2/authorization/kakao?redirect_uri=https://workbooks.ga/oauth2/redirect'>
      <img src={kakaoIcon} width='40px' />
      <Text>카카오로 로그인 하기</Text>
    </Login>
  );
}

function NaverLogin() {
  return (
    <Login href='https://workbooksapi.ga/oauth2/authorization/naver?redirect_uri=https://workbooks.ga/oauth2/redirect'>
      <img src={naverIcon} width='40px' />
      <Text>네이버로 로그인 하기</Text>
    </Login>
  );
}
export default LoginPage;
