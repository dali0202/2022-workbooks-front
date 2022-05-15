import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  requestPostBoard,
  requestGetBoard,
  requestPatchBoard,
} from "../service";
import useMovePage from "../hooks/useMovePage";

function BoardEditPage() {
  const { id } = useParams();
  const [board, setBoard] = useState({ title: "", description: "" });
  const { goBoardDetailPage } = useMovePage();

  const getBoard = async () => {
    const response = await requestGetBoard(id);
    setBoard({
      title: response.data.title,
      description: response.data.description,
    });
    // 예외 처리 추가
  };
  if (id !== undefined) {
    useEffect(() => {
      getBoard(id);
    }, []);
  }

  const changeTitle = (event) => {
    const { value } = event.target;
    setBoard({ ...board, title: value });
  };
  const changeDescription = (event) => {
    const { value } = event.target;
    setBoard({ ...board, description: value });
  };

  const convertDataToBoardRequest = (data) => {
    const boardRequest = {
      title: data.title,
      description: data.description,
      // workbookId: data.workbookId,
    };
    return boardRequest;
  };

  const onSubmit = async () => {
    if (id === undefined) {
      const response = await requestPostBoard(convertDataToBoardRequest(board));
      goBoardDetailPage(response.data);
      return;
    }
    await requestPatchBoard(id, convertDataToBoardRequest(board));
    goBoardDetailPage(id);
  };

  return (
    <div>
      <div>
        <input
          name="title"
          value={board.title}
          onChange={changeTitle}
          placeholder="제목을 입력하세요"
        />
      </div>
      <div>
        <input
          name="description"
          value={board.description}
          onChange={changeDescription}
          placeholder="내용을 입력하세요"
        />
      </div>
      <button type="submit" onClick={onSubmit}>
        저장
      </button>
    </div>
  );
}
export default BoardEditPage;
