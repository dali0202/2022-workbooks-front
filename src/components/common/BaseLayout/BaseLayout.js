import Auth from "../Auth/Auth";
import { Container } from "./BaseLayout.styles";
import Nav from "../Nav/Nav";

function BaseLayout({ children }) {
  return (
    <Container
    // style={{
    //   backgroundImage: `url(${BookDivider})`,
    //   backgroundSize: "cover",
    //   width: "100vw",
    //   height: "100vh",
    // }}
    >
      <Auth />
      <Nav />
      {children}
    </Container>
  );
}
export default BaseLayout;
