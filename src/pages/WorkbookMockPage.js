import { useState } from "react";
import { requestPostMockWorkbook } from "../api";
import useMovePage from "../hooks/useMovePage";

function WorkbookMockPage() {
  const { goBoardPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");
  const [month, setMonth] = useState("");
  const createMock = async () => {
    await requestPostMockWorkbook({ title, grade, month });
    goBoardPage();
  };
  return (
    <>
      <h5>제목</h5>
      <input
        onChange={(event) => setTitle(event.target.value)}
        placeholder="제목"
      />
      <h5>학년</h5>
      <input
        onChange={(event) => setGrade(event.target.value)}
        placeholder="학년"
      />
      <h5>월</h5>
      <input
        onChange={(event) => setMonth(event.target.value)}
        placeholder="월"
      />
      <div>
        <button type="button" onClick={createMock}>
          만들기
        </button>
      </div>
    </>
  );
}
export default WorkbookMockPage;
