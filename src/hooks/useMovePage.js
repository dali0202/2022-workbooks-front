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
  const goWorkbookMockPage = () => {
    navigate("/workbooks/mock");
  };
  const goWorkbookRangePage = () => {
    navigate("/workbooks/range");
  };
  const goWorkbookCustomPage = () => {
    navigate("/workbooks/custom");
  };
  const goStoragePage = () => {
    navigate("/storages");
  };
  return {
    goLoginPage,
    goBoardPage,
    goBoardEditPage,
    goBoardDetailPage,
    goWorkbookMockPage,
    goWorkbookRangePage,
    goWorkbookCustomPage,
    goStoragePage,
  };
};
export default useMovePage;
