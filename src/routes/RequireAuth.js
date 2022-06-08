import { useLocation, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil";

function RequireAuth({ children, loading }) {
  const { authenticated } = useRecoilValue(userState);
  const location = useLocation();

  if (!loading && authenticated === false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
