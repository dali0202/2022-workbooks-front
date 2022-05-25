import { useState } from "react";
import useMovePage from "../../../hooks/useMovePage";
import { WORKBOOK_TYPE } from "../../constant/list";
import { Hover, Label, Td, Tr } from "./WorkbookItem.styles";

function WorkbookItem({ workbook }) {
  const toDate = (createdDate) => {
    if (
      createdDate.substring(0, 10) === new Date().toISOString().substring(0, 10)
    ) {
      return createdDate.substring(11, 16);
    }
    return createdDate.substring(0, 10).replaceAll("-", ".");
  };

  const { goWorkbookDetailPage } = useMovePage();

  const onClick = () => {
    goWorkbookDetailPage(workbook.id);
  };

  return (
    <Tr>
      <Td style={{ width: "12%" }}>
        <Label color={WORKBOOK_TYPE[workbook.type].color}>
          {WORKBOOK_TYPE[workbook.type].name}
        </Label>
      </Td>
      <Td
        style={{
          width: "64%",
          display: "flex",
          position: "relative",
          left: "1rem",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <Hover style={{ marginRight: "auto" }}>{workbook.title}</Hover>
      </Td>
      <Td style={{ width: "14%" }}>{workbook.userName}</Td>
      <Td style={{ width: "14%" }}>{toDate(workbook.createdDate)}</Td>
    </Tr>
  );
}
export default WorkbookItem;

// <th>분류</th>
// <th>번호</th>
// <th>제목</th>
// <th>작성자</th>
// <th>작성일</th>
