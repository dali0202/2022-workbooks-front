import { Link } from "react-router-dom";

function SearchedBoard({ board }) {
  return (
    <div>
      <Link to={`/boards/${board.id}`}>
        <div>{board.title}</div>
      </Link>
      <div>{board.userName}</div>
    </div>
  );
}
export default SearchedBoard;
