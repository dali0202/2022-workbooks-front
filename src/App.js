import { useRecoilState } from "recoil";
import { useEffect } from "react";
import Router from "./router/Router";
import { userState } from "./recoil";
import { getCurrentUser } from "./api";

function App() {
  const [, setUser] = useRecoilState(userState);

  const loadCurrentUser = () => {
    getCurrentUser().then((response) => {
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
      <Router />
    </div>
  );
}

export default App;
