import { useEffect, useState } from "react";
import { requestGetWorkbookList } from "../api";
import WorkbookItem from "../components/workbook/WorkbookItem";

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
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {workbookList.map((workbook) => {
            return <WorkbookItem key={workbook.id} workbook={workbook} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default WorkbookPage;
