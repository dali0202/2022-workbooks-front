import { useEffect, useState } from "react";
import { requestGetWorkbookList } from "../../api";
import WorkbookItem from "../../components/workbook/WorkbookItem/WorkbookItem";
import {
  Column,
  Container,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from "./WorkbookPage.styles";

function WorkbookPage() {
  const [workbookList, setWorkbookList] = useState([]);
  const getWorkbookList = async () => {
    const response = await requestGetWorkbookList();
    setWorkbookList(response.data);
  };
  useEffect(() => {
    getWorkbookList();
  }, []);
  return (
    <Container>
      <Table>
        <Thead>
          <Column style={{ width: "5rem" }}>분류</Column>
          <Column style={{ flexBasis: "2.5rem" }}>번호</Column>
          <Column style={{ flexBasis: "22rem" }}>제목</Column>
          <Column style={{ flexBasis: "7.5rem" }}>작성자</Column>
          <Column style={{ flexBasis: "5rem" }}>작성일</Column>
        </Thead>
        <Tbody>
          {workbookList.map((workbook) => {
            return <WorkbookItem key={workbook.id} workbook={workbook} />;
          })}
        </Tbody>
      </Table>
    </Container>
  );
}
export default WorkbookPage;
