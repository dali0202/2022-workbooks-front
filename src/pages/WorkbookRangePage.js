import { useEffect, useState } from "react";
import { QUESTION_UNIT } from "../components/constant/list";
import WorkbookUnitFilter from "../components/workbook/WorkbookUnitFilter";
import { requestPostRangeWorkbook } from "../service";
import useMovePage from "../hooks/useMovePage";

function WorkbookRangePage() {
  const { goStoragePage } = useMovePage();
  const [questionNum, setQuestionNum] = useState(30);
  const [answerRate, setAnswerRate] = useState({ low: 0, high: 100 });
  const [selectedUnit, setSelectedUnit] = useState([]);
  const unitList = Object.values(QUESTION_UNIT);

  const onSubmit = () => {
    requestPostRangeWorkbook({ questionNum, answerRate, selectedUnit });
    goStoragePage();
  };

  return (
    <>
      <div>
        문항 수
        <input
          value={questionNum}
          onChange={(event) => setQuestionNum(Number(event.target.value))}
        />
      </div>
      <div>
        정답률
        <input
          value={answerRate.low}
          onChange={(event) =>
            setAnswerRate({ low: Number(event.target.value) })
          }
        />
        이상
        <input
          value={answerRate.high}
          onChange={(event) =>
            setAnswerRate({ high: Number(event.target.value) })
          }
        />
        이하
      </div>
      <div>
        <WorkbookUnitFilter
          unitList={unitList}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
        />
      </div>
      <button type="submit" onClick={onSubmit}>
        만들기
      </button>
    </>
  );
}
export default WorkbookRangePage;
