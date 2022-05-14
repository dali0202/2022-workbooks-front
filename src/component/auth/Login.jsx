function Login() {
  return (
    <div style={{ textAlign: "center" }}>
      <GoogleLogin />
      <KakaoLogin />
      <NaverLogin />
    </div>
  );
}

function GoogleLogin() {
  return (
    <div>
      <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth2/redirect">
        구글로 로그인 하기
      </a>
    </div>
  );
}

function KakaoLogin() {
  return (
    <div>
      <a href="http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth2/redirect">
        카카오로 로그인 하기
      </a>
    </div>
  );
}

function NaverLogin() {
  return (
    <div>
      <a href="http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/oauth2/redirect">
        네이버로 로그인 하기
      </a>
    </div>
  );
}
export default Login;
