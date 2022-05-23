import { useState } from "react";
import { QUESTION_POINT } from "../../components/constant/list";
import { requestPostRangeWorkbook } from "../../api";
import useMovePage from "../../hooks/useMovePage";
import Tag from "../../components/common/Tag/Tag";
import RangeSlider from "../../components/common/Range/RangeSlider";
import {
  Container,
  Desc,
  Form,
  Input,
  Label,
  Option,
  TagWrap,
} from "./WorkbookRangePage.styles";
import { Button } from "../WorkbookMockPage/WorkbookMockPage.styles";

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

  const createRange = async () => {
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
  const pageDesc =
    "원하는 문제의 조건을 선택해 보세요.\n" +
    "조건을 만족하는 문제들로 문제집을 구성합니다.";
  return (
    <Container>
      <Form>
        <Desc>{pageDesc}</Desc>
        <Option>
          <Label>문제집 이름</Label>
          <Input
            width="24rem"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="익명의 문제집"
          />
        </Option>
        <Option>
          <Label>문항 수</Label>
          <Input
            width="12rem"
            value={questionNum}
            onChange={(event) => setQuestionNum(Number(event.target.value))}
          />
        </Option>
        <Option>
          <Label style={{ position: "relative", bottom: "1rem" }}>정답률</Label>
          <RangeSlider
            min={lowerBound}
            max={upperBound}
            minDif={10}
            setMin={setLowerBound}
            setMax={setUpperBound}
          />
        </Option>
        <Option>
          <Label>단원 선택</Label>
          <TagWrap>
            {unitList.map((item) => {
              return (
                <Tag
                  name="unit"
                  key={item}
                  item={item}
                  selectedItem={selectedUnit}
                  setSelectedItem={setSelectedUnit}
                />
              );
            })}
          </TagWrap>
        </Option>
        <Option>
          <Label>점수 선택</Label>
          <TagWrap>
            {pointList.map((item) => {
              return (
                <Tag
                  name="point"
                  key={item}
                  item={item}
                  selectedItem={selectedPoint}
                  setSelectedItem={setSelectedPoint}
                />
              );
            })}
          </TagWrap>
        </Option>
        <Button onClick={createRange}>만들기</Button>
        <div />
      </Form>
    </Container>
  );
}
export default WorkbookRangePage;
