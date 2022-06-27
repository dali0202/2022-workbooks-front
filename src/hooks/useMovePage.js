import { useNavigate } from 'react-router-dom';

const useMovePage = () => {
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate('/');
  };
  const goLoginPage = () => {
    navigate('/login');
  };
  const goWorkbookDetailPage = (id) => {
    navigate(`/workbooks/${id}`);
  };
  const goWorkbookMockPage = () => {
    navigate('/mock');
  };
  const goWorkbookRangePage = () => {
    navigate('/range');
  };
  const goWorkbookCustomPage = () => {
    navigate('/custom');
  };
  return {
    goHomePage,
    goLoginPage,
    goWorkbookDetailPage,
    goWorkbookMockPage,
    goWorkbookRangePage,
    goWorkbookCustomPage,
  };
};
export default useMovePage;
