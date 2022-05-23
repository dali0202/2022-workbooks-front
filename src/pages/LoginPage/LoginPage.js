import { Container, Login, Text } from "./LoginPage.styles";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { ReactComponent as KakaoIcon } from "../../assets/icons/kakao.svg";
import { ReactComponent as NaverIcon } from "../../assets/icons/naver.svg";

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
    <Login href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth2/redirect">
      <GoogleIcon width="40px" />
      <Text>구글로 로그인 하기</Text>
    </Login>
  );
}

function KakaoLogin() {
  return (
    <Login href="http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth2/redirect">
      <KakaoIcon width="40px" />
      <Text>카카오로 로그인 하기</Text>
    </Login>
  );
}

function NaverLogin() {
  return (
    <Login href="http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/oauth2/redirect">
      <NaverIcon width="40px" />
      <Text>네이버로 로그인 하기</Text>
    </Login>
  );
}
export default LoginPage;
