import Auth from "../Auth/Auth";
import { Container, Content } from "./BaseLayout.styles";
import Nav from "../Nav/Nav";

function BaseLayout({ children }) {
  return (
    <Container>
      <Auth />
      <Nav />
      <Content>{children}</Content>
    </Container>
  );
}
export default BaseLayout;
