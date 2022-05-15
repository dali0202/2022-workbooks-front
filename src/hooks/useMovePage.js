import { useNavigate } from "react-router-dom";

const useMovePage = () => {
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  const goBoardPage = () => {
    navigate("/boards");
  };
  const goBoardEditPage = () => {
    navigate("/boards/write");
  };
  const goBoardDetailPage = (id) => {
    navigate(`/boards/${id}`);
  };
  return { goLoginPage, goBoardPage, goBoardEditPage, goBoardDetailPage };
};
export default useMovePage;
