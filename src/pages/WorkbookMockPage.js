import { useEffect, useState } from "react";
import { requestPostMockWorkbook } from "../api";
import useMovePage from "../hooks/useMovePage";
import Select from "../components/common/Select/Select";
import { Text } from "./WorkbookCreatePage/WorkbookCreatePage.styles";
import Button from "../components/common/Button/Button";
import { BUTTON_COLOR } from "../components/constant/theme";

function WorkbookMockPage() {
  const { goWorkbookPage } = useMovePage();
  const gradeList = [1, 2, 3];
  const [monthList, setMonthList] = useState([3, 6, 9]);
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(1);
  const [month, setMonth] = useState(3);

  const createMock = async () => {
    await requestPostMockWorkbook({ title, grade, month });
    goWorkbookPage();
  };

  const setGradeAndMonth = (_grade) => {
    setGrade(_grade);
    if (Number(_grade) === 3) {
      setMonthList([3, 6, 9, 11]);
      return;
    }
    setMonthList([3, 6, 9]);
  };
  const pageName = "모의고사 만들기";
  const pageDesc =
    "학년과 월 선택만으로 모의고사를 만들어보세요. 모의고사는 실제와 동일한 유형의 문제들로 구성됩니다.";
  return (
    <>
      <Text>{pageName}</Text>
      <Text>{pageDesc}</Text>
      <div>
        문제집 이름
        <input
          style={{ font: "inherit", padding: "0.2em 0.5em" }}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="문제집 이름을 입력하세요."
        />
      </div>
      <Select name="학년" optionList={gradeList} setOption={setGradeAndMonth} />
      <Select name="월" optionList={monthList} setOption={setMonth} />
      <Button sizeType="WIDE" color={BUTTON_COLOR.BASIC} onClick={createMock}>
        만들기
      </Button>
    </>
  );
}
export default WorkbookMockPage;
