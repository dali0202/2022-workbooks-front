import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestGetWorkbook } from "../../api";

function WorkbookDetailPage() {
  const { id } = useParams();
  const [questionList, setQuestionList] = useState([]);
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");

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
    <>
      문제집이름: {title}
      작성자 : {userName}
      {questionList.map((question) => {
        return <div key={question.id}>{question.descriptionPath}</div>;
      })}
    </>
  );
}
export default WorkbookDetailPage;
