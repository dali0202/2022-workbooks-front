import { Container, Login, Text } from './LoginPage.styles';
import { default as googleIcon } from '../../assets/icons/google.svg';
import { default as kakaoIcon } from '../../assets/icons/kakao.svg';
import { default as naverIcon } from '../../assets/icons/naver.svg';
import { OAUTH_URL } from '../../components/constant/url';

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
    <Login href={OAUTH_URL.GOOGLE}>
      <img src={googleIcon} width='40px' />
      <Text>구글로 로그인 하기</Text>
    </Login>
  );
}

function KakaoLogin() {
  return (
    <Login href={OAUTH_URL.KAKAO}>
      <img src={kakaoIcon} width='40px' />
      <Text>카카오로 로그인 하기</Text>
    </Login>
  );
}

function NaverLogin() {
  return (
    <Login href={OAUTH_URL.NAVER}>
      <img src={naverIcon} width='40px' />
      <Text>네이버로 로그인 하기</Text>
    </Login>
  );
}
export default LoginPage;
