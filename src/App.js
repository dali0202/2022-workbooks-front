import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { userState } from './recoil';
import { requestGetCurrentUser } from './api';
import LoginPage from './pages/LoginPage/LoginPage';
import Oauth2RedirectHandler from './components/auth/Oauth2RedirectHandler';

import WorkbookMockPage from './pages/WorkbookMockPage/WorkbookMockPage';
import WorkbookRangePage from './pages/WorkbookRangePage/WorkbookRangePage';
import WorkbookCustomPage from './pages/WorkbookCustomPage/WorkbookCustomPage';
import WorkbookDetailPage from './pages/WorkbookDetailPage/WorkbookDetailPage';
import WorkbookPage from './pages/WorkbookPage/WorkbookPage';
import RequireAuth from './routes/RequireAuth';
import BaseLayout from './components/common/BaseLayout/BaseLayout';

function App() {
  const [user, setUser] = useRecoilState(userState);
  const [userLoading, setUserLoading] = useState(true);

  const loadCurrentUser = async () => {
    const response = await requestGetCurrentUser();
    if (response !== null) {
      setUser({ currentUser: response.data, authenticated: true });
    }
    setUserLoading(false);
  };

  useEffect(() => {
    loadCurrentUser();
  }, []);

  return (
    <div className='App'>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<WorkbookPage />} />
          <Route path='/workbooks/:id' element={<WorkbookDetailPage />} />
          <Route
            path='/mock'
            element={
              <RequireAuth loading={userLoading}>
                <WorkbookMockPage />
              </RequireAuth>
            }
          />
          <Route
            path='/range'
            element={
              <RequireAuth loading={userLoading}>
                <WorkbookRangePage />
              </RequireAuth>
            }
          />
          <Route
            path='/custom'
            element={
              <RequireAuth loading={userLoading}>
                <WorkbookCustomPage />
              </RequireAuth>
            }
          />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/oauth2/redirect/*'
            element={<Oauth2RedirectHandler />}
          />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;
