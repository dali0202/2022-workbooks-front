import { Container, Login, Text } from './LoginPage.styles';
import { default as googleIcon } from '../../assets/icons/google.svg';
import { default as kakaoIcon } from '../../assets/icons/kakao.svg';
import { default as naverIcon } from '../../assets/icons/naver.svg';
import { requestGetOAuthUri } from '../../api';

function LoginPage() {
  return (
    <Container>
      <GoogleLogin />
      <KakaoLogin />
      {/*<NaverLogin />*/}
    </Container>
  );
}
export default LoginPage;

const getUri = async (provider) => {
  const response = await requestGetOAuthUri(provider);
  location.href = response.data.uri;
};

const GoogleLogin = () => {
  return (
    <Login onClick={() => getUri('google')}>
      <img src={googleIcon} width='40px' />
      <Text>구글로 로그인 하기</Text>
    </Login>
  );
};

const KakaoLogin = () => {
  return (
    <Login onClick={() => getUri('kakao')}>
      <img src={kakaoIcon} width='40px' />
      <Text>카카오로 로그인 하기</Text>
    </Login>
  );
};

const NaverLogin = () => {
  return (
    <Login onClick={() => getUri('naver')}>
      <img src={naverIcon} width='40px' />
      <Text>네이버로 로그인 하기</Text>
    </Login>
  );
};
