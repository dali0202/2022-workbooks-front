import { Route, Routes } from "react-router-dom";
import Header from "../component/common/Header";
import Footer from "../component/common/Footer";
import Home from "../component/Home";
import Login from "../component/auth/Login";
import Oauth2RedirectHandler from "../component/auth/Oauth2RedirectHandler";
import Storage from "../component/storage/Storage";
import BoardMain from "../component/board/BoardMain";
import Workbook from "../component/workbook/Workbook";

function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<BoardMain />} />
        <Route path="/workbooks" element={<Workbook />} />
        <Route path="/storages" element={<Storage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth2/redirect" element={<Oauth2RedirectHandler />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default Router;
