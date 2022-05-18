import { useState } from "react";
import { QUESTION_UNIT, QUESTION_POINT } from "../components/constant/list";
import WorkbookUnitFilter from "../components/workbook/WorkbookUnitFilter";
import { requestPostRangeWorkbook } from "../api";
import useMovePage from "../hooks/useMovePage";

function WorkbookRangePage() {
  const { goBoardPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [questionNum, setQuestionNum] = useState(30);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(100);
  const [selectedUnit, setSelectedUnit] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState([]);
  const unitList = Object.values(QUESTION_UNIT);
  const pointList = Object.values(QUESTION_POINT);

  const createWorkbook = async () => {
    await requestPostRangeWorkbook({
      title,
      questionNum,
      lowerBound,
      upperBound,
      selectedUnit,
      selectedPoint,
    });
    goBoardPage();
  };

  return (
    <>
      <div>
        <h5>제목</h5>
        <input onChange={(event) => setTitle(event.target.value)} />
        <h5>문항 수</h5>
        <input
          value={questionNum}
          onChange={(event) => setQuestionNum(Number(event.target.value))}
        />
      </div>
      <div>
        <h5>정답률</h5>
        <input
          value={lowerBound}
          onChange={(event) => setLowerBound(Number(event.target.value))}
        />
        이상
        <input
          value={upperBound}
          onChange={(event) => setUpperBound(Number(event.target.value))}
        />
        이하
      </div>
      <div>
        <WorkbookUnitFilter
          unitList={unitList}
          pointList={pointList}
          selectedUnit={selectedUnit}
          selectedPoint={selectedPoint}
          setSelectedUnit={setSelectedUnit}
          setSelectedPoint={setSelectedPoint}
        />
      </div>
      <div>
        <button type="submit" onClick={createWorkbook}>
          만들기
        </button>
      </div>
    </>
  );
}
export default WorkbookRangePage;
