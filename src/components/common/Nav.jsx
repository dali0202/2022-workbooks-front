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
      <div>
        <NavLink to="/workbooks">문제집 만들기 </NavLink>
      </div>
      <div>
        <NavLink to="/boards">게시판 </NavLink>
      </div>
      <div>
        <NavLink to="/storage">보관함 </NavLink>
      </div>
      {authenticated ? (
        <div>
          <div>{currentUser.name}</div>
          <NavLink to="/" onClick={logoutHandler}>
            로그아웃
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="/login">로그인</NavLink>
        </div>
      )}
    </div>
  );
}
export default Nav;
