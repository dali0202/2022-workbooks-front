import { useState, useRef } from "react";
import { requestPostMockWorkbook } from "../../api";
import useMovePage from "../../hooks/useMovePage";
import { Container, Desc, Form, SelectWrap } from "./WorkbookMockPage.styles";
import {
  EXTENDED_MONTH_LIST,
  GRADE_LIST,
  MONTH_LIST,
} from "../../components/constant/list";
import {
  CREATE_VALID,
  MOCK_DESC,
  TITLE_VALID,
} from "../../components/constant/message";
import {
  BUTTON_SIZE,
  INPUT_LABEL_STYLE,
  INPUT_STYLE,
  SELECT_SIZE,
} from "../../components/constant/theme";
import CustomInput from "../../components/common/Input/CustomInput";
import CustomSelect from "../../components/common/Select/CustomSelect";
import Button from "../../components/common/Button/Button";
import PALETTE from "../../components/constant/palette";
import Modal from "../../components/common/Modal/Modal";
import { userState } from "../../recoil";

function WorkbookMockPage() {
  const { goHomePage } = useMovePage();
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(1);
  const [month, setMonth] = useState(3);
  const [titleError, setTitleError] = useState(true);
  const titleErrorVisible = useRef(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [monthList, setMonthList] = useState(MONTH_LIST);
  const gradeList = GRADE_LIST;
  const pageDesc = MOCK_DESC;

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const createMock = async () => {
    if (titleError) {
      openModal();
      titleErrorVisible.current = true;
      return;
    }
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
    titleErrorVisible.current = true;
    setTitle(e.target.value);
    if (e.target.value.length > 20 || e.target.value.length === 0) {
      setTitleError(true);
      return;
    }
    setTitleError(false);
  };

  return (
    <>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          onClose={closeModal}
          closable={false}
          maskClosable
        >
          {CREATE_VALID}
        </Modal>
      )}
      <Container>
        <Form>
          <Desc>{pageDesc}</Desc>
          <CustomInput
            label="모의고사 이름"
            inputStyle={INPUT_STYLE.LONG}
            labelStyle={INPUT_LABEL_STYLE}
            onChange={onChangeTitle}
            error={titleError}
            errorVisible={titleErrorVisible}
            errorMessage={TITLE_VALID}
          />
          <SelectWrap>
            <CustomSelect
              width={SELECT_SIZE.LONG.width}
              height={SELECT_SIZE.LONG.height}
              fontSize="0.8rem"
              options={gradeList}
              value={grade}
              label="학년"
              onChange={setGradeAndMonth}
            />
            <CustomSelect
              width={SELECT_SIZE.LONG.width}
              height={SELECT_SIZE.LONG.height}
              fontSize="0.8rem"
              options={monthList}
              value={month}
              label="월"
              onChange={onSetMonth}
            />
          </SelectWrap>
          <Button
            color={PALETTE.BRAND_COLOR}
            sizeType={BUTTON_SIZE.LONG}
            onClick={createMock}
          >
            만들기
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default WorkbookMockPage;
