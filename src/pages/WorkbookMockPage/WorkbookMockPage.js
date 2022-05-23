import { useEffect, useState } from "react";
import { requestPostMockWorkbook } from "../../api";
import useMovePage from "../../hooks/useMovePage";
import { BUTTON_COLOR } from "../../components/constant/theme";
import {
  Button,
  Container,
  Content,
  CustomSelect,
  Desc,
  Form,
  Input,
  SelectWrap,
} from "./WorkbookMockPage.styles";
import { Label, Option } from "../WorkbookRangePage/WorkbookRangePage.styles";

function WorkbookMockPage() {
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
    "학년과 월을 선택해보세요\n" +
    "실제 모의고사와 동일한 구성의 문제들을 만날 수 있습니다";

  return (
    <Container>
      <Form>
        <Desc>{pageDesc}</Desc>
        <Input
          onChange={(event) => setTitle(event.target.value)}
          placeholder="익명의 모의고사"
        />
        <SelectWrap>
          <CustomSelect
            options={gradeList}
            value={grade.value}
            placeholder="학년"
            onChange={setGradeAndMonth}
          />
          <CustomSelect
            options={monthList}
            value={month.value}
            placeholder="월"
            onChange={onSetMonth}
          />
        </SelectWrap>
        <Button onClick={createMock}>만들기</Button>
      </Form>
    </Container>
  );
}
export default WorkbookMockPage;
