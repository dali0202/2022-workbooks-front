import Auth from "../Auth/Auth";
import { Container } from "./BaseLayout.styles";
import Nav from "../Nav/Nav";

function BaseLayout({ children }) {
  return (
    <Container>
      <Auth />
      <Nav />
      {children}
    </Container>
  );
}
export default BaseLayout;
