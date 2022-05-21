import { useEffect, useState } from "react";
import { requestPostMockWorkbook } from "../../../api";
import useMovePage from "../../../hooks/useMovePage";
import { BUTTON_COLOR } from "../../constant/theme";
import {
  Button,
  Container,
  CustomSelect,
  Desc,
  Input,
  Option,
} from "./Mock.styles";

function Mock() {
  const { goWorkbookPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(1);
  const [month, setMonth] = useState(3);
  const [monthList, setMonthList] = useState([
    { value: 3, label: "3" },
    { value: 6, label: "6" },
    { value: 9, label: "9" },
  ]);
  const gradeList = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];
  useEffect(() => {
    console.log(grade);
    console.log(month);
  }, [grade, month]);
  const createMock = async () => {
    await requestPostMockWorkbook({ title, grade, month });
    goWorkbookPage();
  };

  const setGradeAndMonth = (_grade) => {
    setGrade(_grade.value);
    if (Number(_grade.value) === 3) {
      setMonthList([
        { value: 3, label: "3" },
        { value: 6, label: "6" },
        { value: 9, label: "9" },
        { value: 11, label: "11" },
      ]);
      return;
    }
    setMonthList([
      { value: 3, label: "3" },
      { value: 6, label: "6" },
      { value: 9, label: "9" },
    ]);
  };

  const onSetMonth = (_month) => {
    setMonth(_month.value);
  };

  const pageDesc =
    "학년과 월 선택만으로 모의고사를 만들어보세요.\n" +
    " 모의고사는 실제와 동일한 유형의 문제들로 구성됩니다.";

  return (
    <Container>
      <Desc>{pageDesc}</Desc>
      <Input
        onChange={(event) => setTitle(event.target.value)}
        placeholder="익명의 문제집"
      />
      {/* <Select */}
      {/*  name="학년" */}
      {/*  optionList={gradeList} */}
      {/*  setOption={setGradeAndMonth} */}
      {/* /> */}
      {/* <Select name="월" optionList={monthList} setOption={setMonth} /> */}
      <div
        style={{
          display: "flex",
          position: "relative",
          top: "4rem",
        }}
      >
        <CustomSelect
          options={gradeList}
          value={grade.value}
          placeholder="--학년--"
          onChange={setGradeAndMonth}
        />
        <CustomSelect
          options={monthList}
          value={month.value}
          placeholder="--월--"
          onChange={onSetMonth}
        />
      </div>
      <Button sizeType="WIDE" color={BUTTON_COLOR.BASIC} onClick={createMock}>
        만들기
      </Button>
    </Container>
  );
}
export default Mock;
