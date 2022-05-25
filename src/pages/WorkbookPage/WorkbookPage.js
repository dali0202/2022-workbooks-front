import { useEffect, useState, useCallback } from "react";
import { Pagination } from "@mui/material";
import { requestGetWorkbookList } from "../../api";
import WorkbookItem from "../../components/workbook/WorkbookItem/WorkbookItem";
import {
  Column,
  Container,
  Side,
  Table,
  Tbody,
  Thead,
} from "./WorkbookPage.styles";
import SearchContainer from "../../components/workbook/SearchContainer/SearchContainer";

function WorkbookPage() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [workbookList, setWorkbookList] = useState([]);

  const getWorkbookList = useCallback(async () => {
    const response = await requestGetWorkbookList({ page, keyword });
    setWorkbookList(response.data);
  }, [page, keyword]);

  useEffect(() => {
    getWorkbookList();
  }, [getWorkbookList]);

  return (
    <Container>
      <Side />
      <Table>
        <Thead>
          <Column style={{ width: "12%" }}>구분</Column>
          <Column style={{ width: "64%" }}>문제집 이름</Column>
          <Column style={{ width: "14%" }}>생성자</Column>
          <Column style={{ width: "14%" }}>생성일</Column>
        </Thead>
        <Tbody>
          {workbookList.map((workbook) => {
            return <WorkbookItem key={workbook.id} workbook={workbook} />;
          })}
        </Tbody>
      </Table>
      <Pagination
        count={10}
        color="primary"
        onChange={(event, page) => setPage(page)}
      />
      <SearchContainer keyword={keyword} setKeyword={setKeyword} />
    </Container>
  );
}
export default WorkbookPage;
