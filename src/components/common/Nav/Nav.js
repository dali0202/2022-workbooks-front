import { useRecoilValue, useRecoilState } from "recoil";
import { Link, NavLink } from "react-router-dom";
import { userState } from "../../../recoil";
import { Container, Tab, Title } from "./Nav.styles";
import useMovePage from "../../../hooks/useMovePage";

function Nav() {
  const { currentUser, authenticated } = useRecoilValue(userState);
  const [, setUser] = useRecoilState(userState);
  const {
    goHomePage,
    goWorkbookPage,
    goWorkbookCreatePage,
    goStoragePage,
    goLoginPage,
  } = useMovePage();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setUser({
      currentUser: undefined,
      authenticated: false,
    });
  };

  return (
    <Container>
      <Title onClick={goHomePage}>Workbooks</Title>
      <Tab onClick={goWorkbookPage}>문제집</Tab>
      <Tab onClick={goWorkbookCreatePage}>문제집 만들기</Tab>
      <Tab onClick={goStoragePage}>내 문제집</Tab>
      {/* <NavLink to="/workbooks">문제집 </NavLink> */}
      {/* <NavLink to="/create">문제집 만들기 </NavLink> */}
      {/* <NavLink to="/storage">보관함 </NavLink> */}
      {authenticated ? (
        <>
          <Tab>{currentUser.name}</Tab>
          <Tab onClick={logoutHandler}>로그아웃</Tab>
        </>
      ) : (
        <Tab onClick={goLoginPage}>로그인</Tab>
      )}
    </Container>
  );
}
export default Nav;
