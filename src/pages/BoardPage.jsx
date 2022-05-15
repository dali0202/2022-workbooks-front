import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import SearchedBoards from "../component/board/SearchedBoards";
import { requestGetBoardList } from "../service";
import useMovePage from "../hooks/useMovePage";
import { userState } from "../recoil";

function BoardPage() {
  const { authenticated } = useRecoilValue(userState);
  const [boardList, setBoardList] = useState([]);
  const { goBoardEditPage, goLoginPage } = useMovePage();

  const onClick = () => {
    authenticated ? goBoardEditPage() : goLoginPage();
  };

  const getBoardList = useCallback(async () => {
    requestGetBoardList().then((response) => {
      setBoardList(response.data);
    });
  }, []);

  useEffect(() => {
    getBoardList();
  }, [getBoardList]);

  return (
    <>
      <button type="button" onClick={onClick}>
        글쓰기
      </button>
      <SearchedBoards boards={boardList} />
    </>
  );
}
export default BoardPage;
