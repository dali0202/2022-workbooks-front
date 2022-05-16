import { useRecoilValue, useRecoilState } from "recoil";
import { Link, NavLink } from "react-router-dom";
import { userState } from "../../recoil";

function Nav() {
  const { currentUser, authenticated } = useRecoilValue(userState);
  const [, setUser] = useRecoilState(userState);
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    console.log("remove");
    setUser({
      currentUser: undefined,
      authenticated: false,
    });
  };

  return (
    <div className="nav">
      <div className="logo-container">
        <Link to="/">
          <img
            style={{ width: "10%" }}
            className="logo"
            src="/logo192.png"
            alt="logo"
          />
        </Link>
      </div>
      <NavLink to="/workbooks">문제집 만들기 </NavLink>
      <NavLink to="/boards">게시판 </NavLink>
      <NavLink to="/storage">보관함 </NavLink>
      {authenticated ? (
        <div>
          <div>{currentUser.name}</div>
          <NavLink to="/" onClick={logoutHandler}>
            로그아웃
          </NavLink>
        </div>
      ) : (
        <NavLink to="/login">로그인</NavLink>
      )}
    </div>
  );
}
export default Nav;
