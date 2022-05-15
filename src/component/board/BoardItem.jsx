import { Link } from "react-router-dom";

function BoardItem({ board }) {
  return (
    <div>
      <Link to={`/boards/${board.id}`}>{board.title}</Link>
      {board.userName}
    </div>
  );
}
export default BoardItem;
