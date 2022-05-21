import useMovePage from "../../hooks/useMovePage";
import { Button, Container } from "./WorkbookCreatePage.styles";
import CreateWorkbook from "../../components/workbook/CreateWorkbook";

function WorkbookCreatePage() {
  const { goWorkbookMockPage, goWorkbookRangePage, goWorkbookCustomPage } =
    useMovePage();

  return (
    <Container>
      <CreateWorkbook>
        <Button onClick={goWorkbookMockPage()}>Go</Button>
      </CreateWorkbook>
      <CreateWorkbook>
        <Button onClick={goWorkbookRangePage()}>Go</Button>
      </CreateWorkbook>
      <CreateWorkbook>
        <Button onClick={goWorkbookCustomPage()}>Go</Button>
      </CreateWorkbook>
    </Container>
  );
}
export default WorkbookCreatePage;
