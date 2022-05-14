import { useEffect, useState } from "react";
import SearchedBoards from "./SearchedBoards";
import SearchContainer from "./SearchContainer";
import { getBoardList } from "../../api";

function BoardMain() {
  const [boards, setBoards] = useState([]);

  const loadBoardList = () => {
    getBoardList().then((response) => {
      setBoards({
        response,
      });
    });
  };

  useEffect(() => {
    loadBoardList();
  }, []);

  return (
    <div>
      <SearchContainer />
      <SearchedBoards boards={boards} />
    </div>
  );
}
export default BoardMain;
