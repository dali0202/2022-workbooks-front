import SearchedBoard from "./SearchedBoard";

function SearchedBoards({ boards }) {
  console.log(boards);
  return (
    <div>
      <table>
        <th>제목</th>
        <th>작성자</th>
        {boards.map((board) => (
          <SearchedBoard key={board.id} board={board} />
        ))}
      </table>
    </div>
  );
}
export default SearchedBoards;
