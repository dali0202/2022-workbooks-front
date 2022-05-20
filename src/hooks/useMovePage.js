import { useNavigate } from "react-router-dom";

const useMovePage = () => {
  const navigate = useNavigate();
  const goHomePage = () => {
    navigate("/");
  };
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
  const goWorkbookDetailPage = (id) => {
    navigate(`/workbooks/${id}`);
  };
  const goWorkbookCreatePage = () => {
    navigate("/create");
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
    goHomePage,
    goLoginPage,
    goWorkbookPage,
    goWorkbookDetailPage,
    goWorkbookCreatePage,
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
