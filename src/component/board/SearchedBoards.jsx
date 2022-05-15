import BoardItem from "./BoardItem";

function SearchedBoards({ boards }) {
  return (
    <div>
      {boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </div>
  );
}
export default SearchedBoards;
