import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { userState } from "./recoil";
import { requestGetCurrentUser } from "./api";
import WorkbookPageVer2 from "./temp/WorkbookPageVer2";
import LoginPage from "./pages/LoginPage/LoginPage";
import Oauth2RedirectHandler from "./components/auth/Oauth2RedirectHandler";
import BaseLayout from "./components/common/BaseLayout/BaseLayout";
import WorkbookMockPage from "./pages/WorkbookMockPage/WorkbookMockPage";
import WorkbookRangePage from "./pages/WorkbookRangePage/WorkbookRangePage";
import WorkbookCustomPage from "./pages/WorkbookCustomPage/WorkbookCustomPage";
import WorkbookDetailPage from "./pages/WorkbookDetailPage/WorkbookDetailPage";
import WorkbookPage from "./pages/WorkbookPage/WorkbookPage";

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
          <Route path="/" element={<WorkbookPage />} />
          <Route path="/workbooks/:id" element={<WorkbookDetailPage />} />
          <Route path="/mock" element={<WorkbookMockPage />} />
          <Route path="/range" element={<WorkbookRangePage />} />
          <Route path="/custom" element={<WorkbookCustomPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/oauth2/redirect/*"
            element={<Oauth2RedirectHandler />}
          />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;
