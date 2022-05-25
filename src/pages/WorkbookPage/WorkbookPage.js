import { useEffect, useState } from "react";
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
  const getWorkbookList = async () => {
    const response = await requestGetWorkbookList();
    setWorkbookList(response.data);
  };
  useEffect(() => {
    getWorkbookList();
  }, []);
  useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    <Container>
      <Side />
      <Table>
        {/* <SearchContainer keyword={keyword} setKeyword={setKeyword} /> */}
        <Thead>
          <Column style={{ width: "10%" }}>분류</Column>
          <Column style={{ flexBasis: "50%" }}>제목</Column>
          <Column style={{ flexBasis: "20%" }}>작성자</Column>
          <Column style={{ flexBasis: "20%" }}>작성일</Column>
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
    </Container>
  );
}
export default WorkbookPage;
