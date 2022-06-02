import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { requestPostMockWorkbook } from "../../api";
import useMovePage from "../../hooks/useMovePage";
import {
  Button,
  Container,
  Desc,
  ErrorMessage,
  Form,
  SelectWrap,
} from "./WorkbookMockPage.styles";
import {
  EXTENDED_MONTH_LIST,
  GRADE_LIST,
  MONTH_LIST,
} from "../../components/constant/list";
import { MOCK_DESC, TITLE_VALID } from "../../components/constant/message";
import {
  INPUT_LABEL_STYLE,
  INPUT_STYLE,
  SELECT_SIZE,
} from "../../components/constant/theme";
import CustomInput from "../../components/common/Input/CustomInput";
import CustomSelect from "../../components/common/Select/CustomSelect";
import { userState } from "../../recoil";

function WorkbookMockPage() {
  const { goHomePage, goLoginPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(1);
  const [month, setMonth] = useState(3);
  const [titleError, setTitleError] = useState(false);
  const [monthList, setMonthList] = useState(MONTH_LIST);
  const gradeList = GRADE_LIST;
  const pageDesc = MOCK_DESC;
  const { authenticated } = useRecoilValue(userState);

  useEffect(() => {
    if (!authenticated) {
      goLoginPage();
    }
  }, []);

  const createMock = async () => {
    await requestPostMockWorkbook({ title, grade, month });
    goHomePage();
  };

  const setGradeAndMonth = (event) => {
    setGrade(event.target.value);
    if (Number(event.target.value) === 3) {
      setMonthList(EXTENDED_MONTH_LIST);
      return;
    }
    setMonthList(MONTH_LIST);
  };

  const onSetMonth = (event) => {
    setMonth(event.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length > 20) {
      setTitleError(true);
      return;
    }
    setTitleError(false);
  };

  return (
    <Container>
      <Form>
        <Desc>{pageDesc}</Desc>
        <CustomInput
          label="모의고사 이름"
          inputStyle={INPUT_STYLE.BASIC}
          labelStyle={INPUT_LABEL_STYLE}
          onChange={onChangeTitle}
          error={titleError}
          errorMessage={TITLE_VALID}
        />
        <SelectWrap>
          <CustomSelect
            width={SELECT_SIZE.BASIC.width}
            height={SELECT_SIZE.BASIC.height}
            fontSize="0.8rem"
            options={gradeList}
            value={grade}
            label="학년"
            onChange={setGradeAndMonth}
          />
          <CustomSelect
            width={SELECT_SIZE.BASIC.width}
            height={SELECT_SIZE.BASIC.height}
            fontSize="0.8rem"
            options={monthList}
            value={month}
            label="월"
            onChange={onSetMonth}
          />
        </SelectWrap>
        <Button onClick={createMock}>만들기</Button>
      </Form>
    </Container>
  );
}
export default WorkbookMockPage;
