import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { QUESTION_POINT } from "../../components/constant/list";
import { requestPostRangeWorkbook } from "../../api";
import useMovePage from "../../hooks/useMovePage";
import Tag from "../../components/common/Tag/Tag";
import RangeSlider from "../../components/common/Range/RangeSlider";
import {
  Container,
  Desc,
  Form,
  Label,
  Option,
  TagWrap,
} from "./WorkbookRangePage.styles";
import { Button } from "../WorkbookMockPage/WorkbookMockPage.styles";
import { RANGE_DESC, TITLE_VALID } from "../../components/constant/message";
import {
  INPUT_LABEL_STYLE,
  INPUT_STYLE,
} from "../../components/constant/theme";
import CustomInput from "../../components/common/Input/CustomInput";
import { userState } from "../../recoil";

function WorkbookRangePage() {
  const { goHomePage, goLoginPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [questionNum, setQuestionNum] = useState(30);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState([]);
  const [titleError, setTitleError] = useState(false);
  const unitList = [...Array(15).keys()];
  const pointList = Object.values(QUESTION_POINT);
  const { authenticated } = useRecoilValue(userState);

  useEffect(() => {
    if (!authenticated) {
      goLoginPage();
    }
  }, []);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length > 20) {
      setTitleError(true);
      return;
    }
    setTitleError(false);
  };

  const createRange = async () => {
    await requestPostRangeWorkbook({
      title,
      questionNum,
      lowerBound,
      upperBound,
      selectedUnit,
      selectedPoint,
    });
    goHomePage();
  };

  const pageDesc = RANGE_DESC;
  return (
    <Container>
      <Form>
        <Desc>{pageDesc}</Desc>
        <CustomInput
          label="문제집 이름"
          inputStyle={INPUT_STYLE.BASIC}
          labelStyle={INPUT_LABEL_STYLE}
          error={titleError}
          errorMessage={TITLE_VALID}
          onChange={onChangeTitle}
        />
        <CustomInput
          label="문항 수"
          inputStyle={INPUT_STYLE.BASIC}
          labelStyle={INPUT_LABEL_STYLE}
          onChange={(event) => setQuestionNum(Number(event.target.value))}
        />
        <Option>
          <Label style={{ position: "relative", bottom: "1rem" }}>정답률</Label>
          <RangeSlider
            min={lowerBound}
            max={upperBound}
            minDif={0.1}
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
      </Form>
    </Container>
  );
}
export default WorkbookRangePage;
