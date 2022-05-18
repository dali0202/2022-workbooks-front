import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import SearchedBoards from "../components/board/SearchedBoards";
import { requestGetBoardList } from "../api";
import useMovePage from "../hooks/useMovePage";
import { userState } from "../recoil";

function BoardPage() {
  const { authenticated } = useRecoilValue(userState);
  const [boardList, setBoardList] = useState([]);
  const { goBoardWritePage, goLoginPage } = useMovePage();

  const onClick = () => {
    authenticated ? goBoardWritePage() : goLoginPage();
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
        문제집 올리기
      </button>
      <SearchedBoards boards={boardList} />
    </>
  );
}
export default BoardPage;
