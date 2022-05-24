import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { userState } from "../recoil";
import { requestGetStorage } from "../api";

function StoragePage() {
  const { currentUser } = useRecoilValue(userState);
  const [workbookList, setWorkbookList] = useState([]);
  const getStorage = async () => {
    const response = await requestGetStorage();
    setWorkbookList(response.data);
  };
  useEffect(() => {
    getStorage();
  }, []);
  return (
    <div>
      <h5>내가 만든 문제집</h5>
      {workbookList.map((workbook) => {
        return (
          <div key={workbook.id}>
            제목: {workbook.title}
            만든사람: {workbook.writer}
          </div>
        );
      })}
    </div>
  );
}
export default StoragePage;