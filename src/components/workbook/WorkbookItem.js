import useMovePage from "../../hooks/useMovePage";
import { WORKBOOK_TYPE } from "../constant/list";

function WorkbookItem({ workbook }) {
  const { goWorkbookDetailPage } = useMovePage();
  const onClick = () => {
    goWorkbookDetailPage(workbook.id);
  };
  return (
    <tr>
      {console.log(workbook.type)}
      <td>{WORKBOOK_TYPE[Number(workbook.type)].name}</td>
      <td>
        <div onClick={onClick}>{workbook.title}</div>
      </td>
      <td>{workbook.userName}</td>
    </tr>
  );
}
export default WorkbookItem;

// <th>분류</th>
// <th>번호</th>
// <th>제목</th>
// <th>작성자</th>
// <th>작성일</th>
