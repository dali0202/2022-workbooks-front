import { Link } from "react-router-dom";

function SearchedBoard({ board }) {
  return (
    <tr>
      <td>
        <Link to={`/boards/${board.id}`}>{board.title}</Link>
      </td>
      <td>{board.userName}</td>
    </tr>
  );
}
export default SearchedBoard;
