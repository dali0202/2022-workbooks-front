import { Container, Tab, Tabs, Title } from "./Nav.styles";
import useMovePage from "../../../hooks/useMovePage";
import books from "../../../assets/icons/books.png";

function Nav() {
  const {
    goHomePage,
    goWorkbookRangePage,
    goWorkbookCustomPage,
    goWorkbookPage,
  } = useMovePage();

  return (
    <Container>
      <Title onClick={goHomePage}>Workbooks</Title>
      <Tabs>
        <Tab onClick={goHomePage}>모의고사</Tab>
        <Tab onClick={goWorkbookRangePage}>범위선택</Tab>
        <Tab onClick={goWorkbookCustomPage}>문제선택</Tab>
        <Tab onClick={goWorkbookPage}>문제집</Tab>
      </Tabs>
    </Container>
  );
}
export default Nav;
