import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestPostBoard, requestGetBoard, requestPatchBoard } from "../api";
import useMovePage from "../hooks/useMovePage";

function BoardEditPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { goBoardDetailPage } = useMovePage();

  const getBoard = async () => {
    const response = await requestGetBoard(id);
    setTitle(response.data.title);
    setDescription(response.data.description);

    // 예외 처리 추가
  };
  if (id !== undefined) {
    useEffect(() => {
      getBoard(id);
    }, []);
  }

  const onSubmit = async () => {
    if (id === undefined) {
      const response = await requestPostBoard({ title, description });
      goBoardDetailPage(response.data);
      return;
    }
    await requestPatchBoard(id, { title, description });
    goBoardDetailPage(id);
  };

  return (
    <div>
      <div>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목을 입력하세요"
        />
      </div>
      <div>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
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
