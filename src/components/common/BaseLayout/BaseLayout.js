import Auth from "../Auth/Auth";
import { Container } from "./BaseLayout.styles";
import Nav from "../Nav/Nav";
import imgSrc from "./whietebook.jpg";

function BaseLayout({ children }) {
  return (
    <>
      <Auth />
      <Nav />
      <Container
      // style={{
      //   backgroundImage: `url(${imgSrc})`,
      //   backgroundSize: "cover",
      //   width: "100vw",
      //   height: "100vh",
      // }}
      >
        {children}
      </Container>
    </>
  );
}
export default BaseLayout;
