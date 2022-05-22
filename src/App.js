import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { userState } from "./recoil";
import { requestGetCurrentUser } from "./api";
import WorkbookPage from "./pages/WorkbookPage/WorkbookPage";
import BoardPage from "./temp/BoardPage";
import BoardDetailPage from "./temp/BoardDetailPage";
import BoardEditPage from "./temp/BoardEditPage";
import WorkbookCreatePage from "./pages/WorkbookCreatePage/WorkbookCreatePage";
import StoragePage from "./pages/StoragePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Oauth2RedirectHandler from "./components/auth/Oauth2RedirectHandler";
import BaseLayout from "./components/common/BaseLayout/BaseLayout";
import Mock from "./components/workbook/Mock/Mock";
import Range from "./components/workbook/Range/Range";
import Custom from "./components/workbook/Custom/Custom";
import HomePage from "./pages/HomePage";
import WorkbookDetailPage from "./pages/WorkbookDetailPage";

function App() {
  const [, setUser] = useRecoilState(userState);

  const loadCurrentUser = () => {
    requestGetCurrentUser().then((response) => {
      setUser({
        currentUser: response.data,
        authenticated: true,
      });
    });
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      loadCurrentUser();
    }
  }, []);

  return (
    <div className="App">
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workbooks" element={<WorkbookPage />} />
          <Route path="/workbooks/:id" element={<WorkbookDetailPage />} />
          <Route path="/boards/:id" element={<BoardDetailPage />} />
          <Route path="/boards/write" element={<BoardEditPage />} />
          <Route path="/boards/edit/:id" element={<BoardEditPage />} />
          <Route path="/create" element={<WorkbookCreatePage />} />
          <Route path="/mock" element={<Mock />} />
          <Route path="/range" element={<Range />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/storage" element={<StoragePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth2/redirect" element={<Oauth2RedirectHandler />} />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;
