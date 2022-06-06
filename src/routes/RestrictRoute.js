import { useRecoilValue } from "recoil";
import { userState } from "../recoil";

function RestrictRoute({ component, fallback }) {
  const { authenticated } = useRecoilValue(userState);
  return authenticated ? component : fallback;
}
export default RestrictRoute;
