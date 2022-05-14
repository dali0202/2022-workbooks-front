import SearchedBoard from "./SearchedBoard";

function SearchedBoards({ boards }) {
  return (
    <div>
      {boards.map((board) => (
        <SearchedBoard key={board.id} board={board} />
      ))}
    </div>
  );
}
export default SearchedBoards;
