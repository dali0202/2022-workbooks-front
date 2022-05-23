import useMovePage from "../../hooks/useMovePage";
import { Button, Container } from "./WorkbookCreatePage.styles";
import CreateWorkbook from "../../components/workbook/CreateWorkbook";

function WorkbookCreatePage() {
  const { goWorkbookMockPage, goWorkbookRangePage, goWorkbookCustomPage } =
    useMovePage();

  return (
    <Container>
      <Button onClick={goWorkbookMockPage}>모의고사</Button>
      <Button onClick={goWorkbookRangePage}>조건선택</Button>
      <Button onClick={goWorkbookCustomPage}>문제선택</Button>
    </Container>
  );
}
export default WorkbookCreatePage;
