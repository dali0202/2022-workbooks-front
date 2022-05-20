import { useState } from "react";
import { QUESTION_POINT } from "../components/constant/list";
import { requestPostRangeWorkbook } from "../api";
import useMovePage from "../hooks/useMovePage";
import Button from "../components/common/Button/Button";
import { BUTTON_COLOR } from "../components/constant/theme";
import Tags from "../components/workbook/Tags";
import Frame from "../components/common/Frame/Frame";
import RangeSlider from "../components/common/Range/RangeSlider";

function WorkbookRangePage() {
  const { goWorkbookPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [questionNum, setQuestionNum] = useState(30);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(100);
  const [selectedUnit, setSelectedUnit] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState([]);
  const unitList = [...Array(15).keys()];
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
    goWorkbookPage();
  };

  return (
    <>
      <div>
        <h5>문제집 이름</h5>
        <input onChange={(event) => setTitle(event.target.value)} />
        <h5>문항 수</h5>
        <input
          value={questionNum}
          onChange={(event) => setQuestionNum(Number(event.target.value))}
        />
      </div>
      <div>
        <h5>정답률</h5>
        <RangeSlider
          min={lowerBound}
          max={upperBound}
          minDif={10}
          setMin={setLowerBound}
          setMax={setUpperBound}
        />
      </div>
      <h5>단원 선택</h5>
      {unitList.map((item) => {
        return (
          <Tags
            name="unit"
            key={item}
            item={item}
            selectedItem={selectedUnit}
            setSelectedItem={setSelectedUnit}
          />
        );
      })}
      <h5>점수 선택</h5>
      {pointList.map((item) => {
        return (
          <Tags
            name="point"
            key={item}
            item={item}
            selectedItem={selectedPoint}
            setSelectedItem={setSelectedPoint}
          />
        );
      })}
      <div>
        <Button
          sizeType="WIDE"
          color={BUTTON_COLOR.BASIC}
          onClick={createWorkbook}
        >
          만들기
        </Button>
      </div>
    </>
  );
}
export default WorkbookRangePage;
