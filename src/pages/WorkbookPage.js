import { useEffect, useState } from "react";
import { requestGetWorkbookList } from "../api";

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
      {workbookList.map((workbook) => {
        return (
          <div key={workbook.id}>
            제목: {workbook.title}
            만든사람: {workbook.userName}
          </div>
        );
      })}
    </div>
  );
}
export default WorkbookPage;
