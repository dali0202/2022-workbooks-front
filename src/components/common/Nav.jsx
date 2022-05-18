import { useRecoilValue, useRecoilState } from "recoil";
import { Link, NavLink } from "react-router-dom";
import { userState } from "../../recoil";

function Nav() {
  const { currentUser, authenticated } = useRecoilValue(userState);
  const [, setUser] = useRecoilState(userState);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setUser({
      currentUser: undefined,
      authenticated: false,
    });
  };

  return (
    <div className="nav">
      <h2>
        <Link to="/">Workbooks</Link>
      </h2>
      <NavLink to="/workbooks">문제집 </NavLink>
      <NavLink to="/create">문제집 만들기 </NavLink>
      <NavLink to="/storage">보관함 </NavLink>
      {authenticated ? (
        <div style={{ display: "inline" }}>
          {currentUser.name}
          <NavLink to="/" onClick={logoutHandler}>
            로그아웃
          </NavLink>
        </div>
      ) : (
        <div style={{ display: "inline" }}>
          <NavLink to="/login">로그인</NavLink>
        </div>
      )}
    </div>
  );
}
export default Nav;
