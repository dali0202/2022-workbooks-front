import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { requestGetWorkbook } from "../api";

function WorkbookDetailPage() {
  const { id } = useParams();
  const getWorkbook = async () => {
    const response = await requestGetWorkbook(id);
    console.log(response.data);
  };
  useEffect(() => {
    getWorkbook();
  }, []);
}
export default WorkbookDetailPage;
