import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { requestGetWorkbook } from "../../api";
import {
  Container,
  Form,
  Input,
  Nav,
  Question,
} from "./WorkbookDetailPage.styles";
import Carousel, { CarouselItem } from "./Carousel";
import CustomInput from "../../components/common/Input/CustomInput";
import { INPUT_STYLE } from "../../components/constant/theme";

function WorkbookDetailPage() {
  const { id } = useParams();
  const [questionList, setQuestionList] = useState([]);
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [curNum, setCurNum] = useState(1);

  const updateNum = (newNum) => {
    if (newNum < 1) {
      newNum = 1;
    } else if (newNum > questionList.length) {
      newNum = questionList.length;
    }
    setCurNum(newNum);
  };
  useEffect(() => {
    if (curNum <= 0) {
      setCurNum(1);
    }
    if (curNum > questionList.length) {
      setCurNum(questionList.length);
    }
  }, [curNum]);
  const getWorkbook = async () => {
    const response = await requestGetWorkbook(id);
    setQuestionList(response.data.questionResponses);
    setTitle(response.data.title);
    setUserName(response.data.userName);
  };

  useEffect(() => {
    getWorkbook();
  }, []);

  return (
    <Form>
      <Question>
        <IconButton
          onClick={() => {
            setCurNum(curNum - 1);
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Container>
          <Carousel curIndex={curNum - 1} updateIndex={updateNum}>
            {questionList.map((question) => {
              return (
                <CarouselItem key={question.id}>
                  {question.descriptionPath}
                </CarouselItem>
              );
            })}
          </Carousel>
        </Container>
        <IconButton
          onClick={() => {
            setCurNum(curNum + 1);
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Question>
      <Nav>
        <Input
          value={curNum}
          onChange={(e) => setCurNum(Number(e.target.value))}
        />
        <div>/</div>
        {questionList.length}
      </Nav>
    </Form>
  );
}
export default WorkbookDetailPage;
