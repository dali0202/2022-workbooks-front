import { useState } from "react";
import { requestPostMockWorkbook } from "../service";
import useMovePage from "../hooks/useMovePage";

function WorkbookMockPage() {
  const { goStoragePage } = useMovePage();
  const [grade, setGrade] = useState("");
  const [month, setMonth] = useState("");
  const createMock = async () => {
    await requestPostMockWorkbook({ grade, month });
    goStoragePage();
  };
  return (
    <>
      <input
        onChange={(event) => setGrade(event.target.value)}
        placeholder="학년"
      />
      <input
        onChange={(event) => setMonth(event.target.value)}
        placeholder="월"
      />
      <button type="button" onClick={createMock}>
        만들기
      </button>
    </>
  );
}
export default WorkbookMockPage;
