import Auth from "../Auth/Auth";
import { Container, Div, Path, Svg } from "./BaseLayout.styles";
import Nav from "../Nav/Nav";
import { ReactComponent as BookDivider } from "../../../assets/book.svg";

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
