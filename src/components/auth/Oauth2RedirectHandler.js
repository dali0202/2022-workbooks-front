import { Route, Routes, useSearchParams, Navigate } from 'react-router-dom';

function Oauth2RedirectHandler() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  if (token) {
    localStorage.setItem('accessToken', token);
    return (
      <Routes>
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path='*' element={<Navigate replace to='/login' />} />
    </Routes>
  );
}
export default Oauth2RedirectHandler;
