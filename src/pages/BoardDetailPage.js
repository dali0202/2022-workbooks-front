import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestDeleteBoard, requestGetBoard } from "../service";
import useMovePage from "../hooks/useMovePage";

function BoardDetailPage() {
  const [board, setBoard] = useState({});
  const { goBoardPage, goBoardEditPage } = useMovePage();
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
  const onUpdate = () => {
    goBoardEditPage(id);
  };
  const onDelete = async () => {
    await requestDeleteBoard(id);
    goBoardPage();
  };

  useEffect(() => {
    loadBoard(id);
  }, []);

  return (
    <div>
      <button type="button" onClick={onUpdate}>
        수정
      </button>
      <button type="button" onClick={onDelete}>
        삭제
      </button>
      <button type="button" onClick={goBoardPage}>
        글목록
      </button>
      <h3>{board.title}</h3>
      <div>내용:{board.description}</div>
      <div>작성자:{board.userName}</div>
    </div>
  );
}
export default BoardDetailPage;
