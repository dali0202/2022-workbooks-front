import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { userState } from "./recoil";
import { requestGetCurrentUser } from "./api";
import WorkbookPage from "./pages/WorkbookPage";
import BoardPage from "./pages/BoardPage";
import BoardDetailPage from "./pages/BoardDetailPage";
import BoardEditPage from "./pages/BoardEditPage";
import WorkbookCreatePage from "./pages/WorkbookCreatePage/WorkbookCreatePage";
import StoragePage from "./pages/StoragePage";
import LoginPage from "./pages/LoginPage";
import Oauth2RedirectHandler from "./components/auth/Oauth2RedirectHandler";
import BaseLayout from "./components/common/BaseLayout";
import WorkbookMockPage from "./pages/WorkbookMockPage";
import WorkbookRangePage from "./pages/WorkbookRangePage";
import WorkbookEditPage from "./pages/WorkbookEditPage";
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
          <Route path="/mock" element={<WorkbookMockPage />} />
          <Route path="/range" element={<WorkbookRangePage />} />
          <Route path="/custom" element={<WorkbookEditPage />} />
          <Route path="/storage" element={<StoragePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth2/redirect" element={<Oauth2RedirectHandler />} />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;
