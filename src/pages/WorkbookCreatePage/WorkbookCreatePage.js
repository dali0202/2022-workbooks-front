import useMovePage from "../../hooks/useMovePage";
import { Button, Container } from "./WorkbookCreatePage.styles";

function WorkbookCreatePage() {
  const { goWorkbookMockPage, goWorkbookRangePage, goWorkbookCustomPage } =
    useMovePage();

  return (
    <Container>
      <Button onClick={goWorkbookMockPage}>모의고사 만들기</Button>
      <Button onClick={goWorkbookRangePage}>범위 선택으로 만들기</Button>
      <Button onClick={goWorkbookCustomPage}>직접 만들기</Button>
    </Container>
  );
}
export default WorkbookCreatePage;
