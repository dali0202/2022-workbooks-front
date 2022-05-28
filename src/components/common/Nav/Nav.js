import { Container, Tab, Tabs, Title } from "./Nav.styles";
import useMovePage from "../../../hooks/useMovePage";

function Nav() {
  const {
    goWorkbookPage,
    goWorkbookMockPage,
    goWorkbookRangePage,
    goWorkbookCustomPage,
  } = useMovePage();

  return (
    <Container>
      <Title onClick={goWorkbookPage}>Workbooks</Title>
      <Tabs>
        <Tab onClick={goWorkbookMockPage}>모의고사</Tab>
        <Tab onClick={goWorkbookRangePage}>범위선택</Tab>
        <Tab onClick={goWorkbookCustomPage}>문제선택</Tab>
      </Tabs>
    </Container>
  );
}
export default Nav;
