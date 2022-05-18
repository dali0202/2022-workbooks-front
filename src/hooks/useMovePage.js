import { useNavigate } from "react-router-dom";

const useMovePage = () => {
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  const goWorkbookPage = () => {
    navigate("/workbooks");
  };
  const goBoardWritePage = () => {
    navigate("/boards/write");
  };
  const goBoardEditPage = (id) => {
    navigate(`/boards/edit/${id}`);
  };
  const goBoardDetailPage = (id) => {
    navigate(`/boards/${id}`);
  };
  const goWorkbookMockPage = () => {
    navigate("/mock");
  };
  const goWorkbookRangePage = () => {
    navigate("/range");
  };
  const goWorkbookCustomPage = () => {
    navigate("/custom");
  };
  const goStoragePage = () => {
    navigate("/storage");
  };
  return {
    goLoginPage,
    goBoardPage: goWorkbookPage,
    goBoardWritePage,
    goBoardEditPage,
    goBoardDetailPage,
    goWorkbookMockPage,
    goWorkbookRangePage,
    goWorkbookCustomPage,
    goStoragePage,
  };
};
export default useMovePage;
