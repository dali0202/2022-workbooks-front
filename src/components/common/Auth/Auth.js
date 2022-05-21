import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../../recoil";
import useMovePage from "../../../hooks/useMovePage";
import { Button, ButtonWrap, Container, UserName } from "./Auth.styles";

function Auth() {
  const { currentUser, authenticated } = useRecoilValue(userState);
  const [, setUser] = useRecoilState(userState);
  const { goLoginPage } = useMovePage();

  const authHandler = () => {
    if (authenticated === false) {
      goLoginPage();
      return;
    }
    localStorage.removeItem("accessToken");
    setUser({
      currentUser: undefined,
      authenticated: false,
    });
  };

  return (
    <Container>
      {authenticated ? <UserName>{currentUser.name}님</UserName> : undefined}
      <Button onClick={authHandler}>
        {authenticated ? "로그아웃" : "로그인"}
      </Button>
    </Container>
  );
}
export default Auth;
