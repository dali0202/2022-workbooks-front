import useMovePage from "../../hooks/useMovePage";
import { Button, Container } from "./WorkbookCreatePage.styles";
import CreateWorkbook from "../../components/workbook/CreateWorkbook";

function WorkbookCreatePage() {
  const { goWorkbookMockPage, goWorkbookRangePage, goWorkbookCustomPage } =
    useMovePage();

  return (
    <Container>
      <Button onClick={goWorkbookMockPage}>Go</Button>
      <Button onClick={goWorkbookRangePage}>Go</Button>
      <Button onClick={goWorkbookCustomPage}>Go</Button>
    </Container>
  );
}
export default WorkbookCreatePage;
