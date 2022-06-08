import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import useMovePage from "../../hooks/useMovePage";
import { requestGetQuestionList, requestPostCustomWorkbook } from "../../api";
import QuestionCart from "../../components/question/QuestionCart/QuestionCart";
import QuestionItem from "../../components/question/QuestionItem/QuestionItem";
import {
  CartFrame,
  CartInfo,
  Container,
  QuestionCartContainer,
  Questions,
  QuestionSearchContainer,
  SearchedContainer,
  SelectWrap,
} from "./WorkbookCustomPage.styles";
import CustomSelect from "../../components/common/Select/CustomSelect";
import {
  EXTENDED_MONTH_LIST,
  GRADE_LIST,
  MONTH_LIST,
  POINT_LIST,
  QUESTION_PAGING_SIZE,
  SORT_LIST,
} from "../../components/constant/list";
import {
  BUTTON_SIZE,
  INPUT_LABEL_STYLE,
  INPUT_STYLE,
  SELECT_SIZE,
} from "../../components/constant/theme";
import CustomInput from "../../components/common/Input/CustomInput";
import { CREATE_VALID, TITLE_VALID } from "../../components/constant/message";
import Button from "../../components/common/Button/Button";
import PALETTE from "../../components/constant/palette";
import Modal from "../../components/common/Modal/Modal";

function WorkbookCustomPage() {
  const { goHomePage } = useMovePage();

  const [title, setTitle] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestionList, setSelectedQuestionList] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState([]);

  const [grade, setGrade] = useState(0);
  const [month, setMonth] = useState(0);
  const [point, setPoint] = useState(0);
  const [sort, setSort] = useState("CREATED_DESC");
  const [page, setPage] = useState(0);
  const [titleError, setTitleError] = useState(true);
  const titleErrorVisible = useRef(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [monthList, setMonthList] = useState(MONTH_LIST);
  const gradeList = GRADE_LIST;
  const pointList = POINT_LIST;
  const sortList = SORT_LIST;

  const obsRef = useRef(null);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const setGradeAndMonth = (event) => {
    setPage(0);
    setQuestionList([]);
    setGrade(event.target.value);
    if (Number(event.target.value) === 3) {
      setMonthList(EXTENDED_MONTH_LIST);
      return;
    }
    setMonthList(MONTH_LIST);
  };

  const getQuestionList = async () => {
    const response = await requestGetQuestionList({
      grade: grade === 0 ? null : grade,
      month: month === 0 ? null : month,
      point: point === 0 ? null : point,
      offset: page * QUESTION_PAGING_SIZE,
      sort,
    });
    if (response.data.length === 0) {
      return;
    }
    setQuestionList((prevState) => [...prevState, ...response.data]);
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

  const createWorkbook = async () => {
    if (titleError || selectedQuestionId.length === 0) {
      openModal();
      titleErrorVisible.current = true;
      return;
    }
    await requestPostCustomWorkbook({ title, selectedQuestionId });
    goHomePage();
  };

  useEffect(() => {
    const selectedQuestions = [];
    selectedQuestionList.map((question) => selectedQuestions.push(question.id));
    setSelectedQuestionId(selectedQuestions);
  }, [selectedQuestionList]);

  useEffect(() => {
    setPage(0);
    setQuestionList([]);
  }, [grade, month, point, sort]);

  useEffect(() => {
    getQuestionList();
  }, [grade, month, point, sort, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prevState) => prevState + 1);
        }
      },
      { threshold: 0.5 }
    );
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

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
        <QuestionSearchContainer>
          <SelectWrap>
            <CustomSelect
              width={SELECT_SIZE.SMALL.width}
              height={SELECT_SIZE.SMALL.height}
              fontSize="0.8rem"
              label="학년"
              value={grade}
              onChange={setGradeAndMonth}
              options={gradeList}
            />
            <CustomSelect
              width={SELECT_SIZE.SMALL.width}
              height={SELECT_SIZE.SMALL.height}
              fontSize="0.8rem"
              label="월"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              options={monthList}
            />
            <CustomSelect
              width={SELECT_SIZE.SMALL.width}
              height={SELECT_SIZE.SMALL.height}
              fontSize="0.8rem"
              label="점수"
              value={point}
              onChange={(e) => setPoint(e.target.value)}
              options={pointList}
            />
            <CustomSelect
              width={SELECT_SIZE.SMALL.width}
              height={SELECT_SIZE.SMALL.height}
              fontSize="0.8rem"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              options={sortList}
            />
          </SelectWrap>
          <SearchedContainer>
            {questionList.map((question) => {
              return (
                <QuestionItem
                  key={question.id}
                  question={question}
                  selectedQuestionList={selectedQuestionList}
                  setSelectedQuestionList={setSelectedQuestionList}
                  selectedQuestionId={selectedQuestionId}
                />
              );
            })}
          </SearchedContainer>
          <div ref={obsRef} />
        </QuestionSearchContainer>
        <CartFrame>
          <QuestionCartContainer>
            <div style={{ position: "relative", top: "1rem" }}>
              <CustomInput
                label="문제집 이름"
                inputStyle={INPUT_STYLE.BASIC}
                labelStyle={INPUT_LABEL_STYLE}
                error={titleError}
                errorMessage={TITLE_VALID}
                errorVisible={titleErrorVisible}
                onChange={onChangeTitle}
              />
            </div>
            <CartInfo>문항 수 {selectedQuestionList.length}</CartInfo>
            <Questions>
              {selectedQuestionList.map((question) => {
                return (
                  <QuestionCart
                    key={question.id}
                    question={question}
                    selectedQuestionList={selectedQuestionList}
                    setSelectedQuestionList={setSelectedQuestionList}
                  />
                );
              })}
            </Questions>
            <Button
              color={PALETTE.BRAND_COLOR}
              sizeType={BUTTON_SIZE.BASIC}
              onClick={createWorkbook}
            >
              만들기
            </Button>
          </QuestionCartContainer>
        </CartFrame>
      </Container>
    </>
  );
}
export default WorkbookCustomPage;
