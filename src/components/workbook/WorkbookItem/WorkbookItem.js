import useMovePage from "../../../hooks/useMovePage";
import { WORKBOOK_TYPE } from "../../constant/list";
import { Label, Td, Tr } from "./WorkbookItem.styles";

function WorkbookItem({ workbook }) {
  const toDate = (createdDate) => {
    return createdDate.substring(0, 10).replaceAll("-", ".");
  };
  const { goWorkbookDetailPage } = useMovePage();
  const onClick = () => {
    goWorkbookDetailPage(workbook.id);
  };
  return (
    <Tr>
      <Td style={{ width: "5rem" }}>
        <Label color={WORKBOOK_TYPE[workbook.type].color}>
          {WORKBOOK_TYPE[workbook.type].name}
        </Label>
      </Td>
      <Td style={{ width: "2.5rem" }}>{workbook.id}</Td>
      <Td
        style={{
          width: "22rem",
          display: "flex",
          position: "relative",
          left: "1rem",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {workbook.title}
      </Td>
      <Td style={{ width: "7.5rem" }}>{workbook.userName}</Td>
      <Td style={{ width: "5rem" }}>{toDate(workbook.createdDate)}</Td>
    </Tr>
  );
}
export default WorkbookItem;

// <th>분류</th>
// <th>번호</th>
// <th>제목</th>
// <th>작성자</th>
// <th>작성일</th>
