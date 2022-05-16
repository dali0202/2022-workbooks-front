import { useState } from "react";
import { requestPostMockWorkbook } from "../service";

function WorkbookMockPage() {
  const [grade, setGrade] = useState("");
  const [month, setMonth] = useState("");
  const createMock = async () => {
    await requestPostMockWorkbook({ grade, month });
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
