import { Container, Title } from "./Nav.styles";
import useMovePage from "../../../hooks/useMovePage";

function Nav() {
  const { goHomePage } = useMovePage();

  return (
    <Container>
      <Title onClick={goHomePage}>Workbooks</Title>
    </Container>
  );
}
export default Nav;
