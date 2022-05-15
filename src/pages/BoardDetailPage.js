import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestDeleteBoard, requestGetBoard } from "../service";
import useMovePage from "../hooks/useMovePage";

function BoardDetailPage() {
  const [board, setBoard] = useState({});
  const { goBoardPage } = useMovePage();
  const { id } = useParams();

  const loadBoard = async () => {
    const response = await requestGetBoard(id);
    setBoard({
      title: response.data.title,
      description: response.data.description,
      userName: response.data.userName,
    });
    // 예외 처리 추가
  };

  const onDeleteBoard = () => {
    requestDeleteBoard(id);
    goBoardPage();
  };

  useEffect(() => {
    loadBoard(id);
  }, []);

  return (
    <div>
      {board.title}
      {board.description}
      {board.userName}
      <Link to={`/boards/edit/${id}`}>수정</Link>
      <input type="button" onClick={onDeleteBoard} value="삭제" />
    </div>
  );
}
export default BoardDetailPage;
