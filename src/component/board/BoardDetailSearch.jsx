import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBoard } from "../../api";

function BoardDetailSearch() {
  const { id } = useParams();
  const [board, setBoard] = useState({});
  const loadBoard = async () => {
    const response = await getBoard(id);
    setBoard({
      title: response.data.title,
      description: response.data.description,
      userName: response.data.userName,
    });
    // 예외 처리 추가
  };

  useEffect(() => {
    loadBoard(id);
  }, []);

  return (
    <div>
      {board.title}
      {board.description}
      {board.userName}
    </div>
  );
}
export default BoardDetailSearch;
