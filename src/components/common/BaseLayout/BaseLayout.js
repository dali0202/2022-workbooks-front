import Auth from '../Auth/Auth';
import Nav from '../Nav/Nav';
import { Container, Content } from './BaseLayout.styles';

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
