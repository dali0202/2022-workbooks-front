import { useEffect, useState } from "react";
import SearchedBoards from "./SearchedBoards";
import BoardServiceContainer from "./BoardServiceContainer";
import { getBoardList } from "../../api";

function BoardMain() {
  const [boards, setBoards] = useState([]);

  const loadBoardList = () => {
    getBoardList().then((response) => {
      setBoards(response.data);
    });
  };

  useEffect(() => {
    loadBoardList();
  }, []);

  return (
    <div>
      <SearchedBoards boards={boards} />
      <BoardServiceContainer />
    </div>
  );
}
export default BoardMain;
