import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { userState } from "./recoil";
import { requestGetCurrentUser } from "./service";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import BoardDetailPage from "./pages/BoardDetailPage";
import BoardEditPage from "./pages/BoardEditPage";
import WorkbookPage from "./pages/WorkbookPage";
import StoragePage from "./pages/StoragePage";
import LoginPage from "./pages/LoginPage";
import Oauth2RedirectHandler from "./component/auth/Oauth2RedirectHandler";
import BaseLayout from "./component/common/BaseLayout";

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
          <Route path="/boards" element={<BoardPage />} />
          <Route path="/boards/:id" element={<BoardDetailPage />} />
          <Route path="/boards/write" element={<BoardEditPage />} />
          <Route path="/boards/edit/:id" element={<BoardEditPage />} />
          <Route path="/workbooks" element={<WorkbookPage />} />
          <Route path="/storages" element={<StoragePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth2/redirect" element={<Oauth2RedirectHandler />} />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;
