import Auth from "../Auth/Auth";
import { Container } from "./BaseLayout.styles";
import Nav from "../Nav/Nav";

function BaseLayout({ children }) {
  return (
    <>
      <Auth />
      <Nav />
      <Container>{children}</Container>
    </>
  );
}
export default BaseLayout;
