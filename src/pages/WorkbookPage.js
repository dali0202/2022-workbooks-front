import { Link } from "react-router-dom";
import useMovePage from "../hooks/useMovePage";

function WorkbookPage() {
  const { goWorkbookMockPage, goWorkbookRangePage, goWorkbookCustomPage } =
    useMovePage();
  const onClickMock = () => {
    goWorkbookMockPage();
  };
  const onCLickRange = () => {
    goWorkbookRangePage();
  };
  const onClickCustom = () => {
    goWorkbookCustomPage();
  };
  return (
    <>
      <div>
        <button type="button" onClick={onClickMock}>
          모의고사 만들기
        </button>
      </div>
      <div>
        <button type="button" onClick={onCLickRange}>
          범위 선택하여 만들기
        </button>
        <button type="button" onClick={onClickCustom}>
          직접 문제 선택하여 만들기
        </button>
      </div>
    </>
  );
}
export default WorkbookPage;
