import { useSearchParams } from 'react-router-dom';
import { requestPostCode } from '../../api';
import { useEffect } from 'react';
import useMovePage from '../../hooks/useMovePage';

function OauthPage() {
  const { goHomePage } = useMovePage();
  const [searchParams] = useSearchParams();

  const login = async () => {
    const code = searchParams.get('code');
    const provider = location.pathname.split('/')[2];
    const response = await requestPostCode(provider, { code });

    const accessToken = response.data.accessToken;
    console.log(accessToken);
    localStorage.setItem('accessToken', accessToken);
    goHomePage();
  };
  useEffect(() => {
    login();
  }, []);

  return <></>;
}

export default OauthPage;
