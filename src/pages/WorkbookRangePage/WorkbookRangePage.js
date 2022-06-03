import { useEffect, useRef, useState } from "react";
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
import {
  CREATE_VALID,
  MULTI_SELECT_VALID,
  QUESTION_NUM_VALID,
  RANGE_DESC,
  TITLE_VALID,
} from "../../components/constant/message";
import {
  BUTTON_SIZE,
  INPUT_LABEL_STYLE,
  INPUT_STYLE,
} from "../../components/constant/theme";
import CustomInput from "../../components/common/Input/CustomInput";
import { userState } from "../../recoil";
import Button from "../../components/common/Button/Button";
import PALETTE from "../../components/constant/palette";
import { ErrorMessage } from "../../components/common/Input/CustomInput.styles";
import Modal from "../../components/common/Modal/Modal";

function WorkbookRangePage() {
  const { goHomePage, goLoginPage } = useMovePage();
  const [title, setTitle] = useState("");
  const [questionNum, setQuestionNum] = useState(30);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState([]);
  const [titleError, setTitleError] = useState(true);
  const [unitError, setUnitError] = useState(true);
  const [pointError, setPointError] = useState(true);
  const [questionNumError, setQuestionNumError] = useState(true);
  const titleErrorVisible = useRef(false);
  const questionNumErrorVisible = useRef(false);
  const unitErrorVisible = useRef(false);
  const pointErrorVisible = useRef(false);
  const [modalVisible, setModalVisible] = useState(false);
  const unitList = [...Array(15).keys()];
  const pointList = Object.values(QUESTION_POINT);
  const { authenticated } = useRecoilValue(userState);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (!authenticated) {
      goLoginPage();
    }
  }, []);

  const onChangeTitle = (e) => {
    titleErrorVisible.current = true;
    setTitle(e.target.value);
    if (e.target.value.length > 20 || e.target.value.length === 0) {
      setTitleError(true);
      return;
    }
    setTitleError(false);
  };

  const onChangeNum = (e) => {
    questionNumErrorVisible.current = true;
    setQuestionNum(e.target.value);
    const num = Number(e.target.value);
    if (Number.isInteger(num) && num > 0 && num <= 100) {
      setQuestionNumError(false);
      return;
    }
    setQuestionNumError(true);
  };

  const createRange = async () => {
    if (titleError || questionNumError || unitError || pointError) {
      openModal();
      titleErrorVisible.current = true;
      questionNumErrorVisible.current = true;
      unitErrorVisible.current = true;
      pointErrorVisible.current = true;
      return;
    }
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

  useEffect(() => {
    if (selectedUnit.length === 0) setUnitError(true);
    else setUnitError(false);
  }, [selectedUnit]);

  useEffect(() => {
    if (selectedPoint.length === 0) setPointError(true);
    else setPointError(false);
  }, [selectedPoint]);

  const pageDesc = RANGE_DESC;

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
            label="문제집 이름"
            inputStyle={INPUT_STYLE.LONG}
            labelStyle={INPUT_LABEL_STYLE}
            error={titleError}
            errorVisible={titleErrorVisible}
            errorMessage={TITLE_VALID}
            onChange={onChangeTitle}
          />
          <CustomInput
            label="문항 수"
            inputStyle={INPUT_STYLE.LONG}
            labelStyle={INPUT_LABEL_STYLE}
            onChange={onChangeNum}
            error={questionNumError}
            errorVisible={questionNumErrorVisible}
            errorMessage={QUESTION_NUM_VALID}
          />
          <Option>
            <Label style={{ position: "relative", bottom: "1rem" }}>
              정답률
            </Label>
            <RangeSlider
              min={lowerBound}
              max={upperBound}
              minDif={0.1}
              setMin={setLowerBound}
              setMax={setUpperBound}
            />
          </Option>
          <Option>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Label>단원 선택</Label>
              {unitError && unitErrorVisible.current && (
                <ErrorMessage>{MULTI_SELECT_VALID}</ErrorMessage>
              )}
            </div>
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Label>점수 선택</Label>
              {pointError && pointErrorVisible.current && (
                <ErrorMessage>{MULTI_SELECT_VALID}</ErrorMessage>
              )}
            </div>
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
          <Button
            color={PALETTE.BRAND_COLOR}
            sizeType={BUTTON_SIZE.LONG}
            onClick={createRange}
          >
            만들기
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default WorkbookRangePage;
