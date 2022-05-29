import { useEffect, useState, useRef } from "react";
import { requestGetWorkbookList } from "../../api";
import WorkbookItem from "../../components/workbook/WorkbookItem/WorkbookItem";
import { Column, Container, Table, Tbody, Thead } from "./WorkbookPage.styles";
import SearchContainer from "../../components/workbook/SearchContainer/SearchContainer";

function WorkbookPage() {
  const [keyword, setKeyword] = useState(null);
  const [lastWorkbookId, setLastWorkbookId] = useState(null);
  const [workbookList, setWorkbookList] = useState([]);
  const obsRef = useRef(null);
  const cursor = useRef(null);

  // useRef는 일반적인 자바스크립트 객체입니다 즉 heap 영역에 저장됩니다
  // 그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 참조할 때 마다 같은 메모리 주소를 가지게 되고
  // 같은 메모리 주소를 가지기 때문에 === 연산이 항상 true를 반환하고, 값이 바뀌어도 리렌더링 되지 않습니다.
  //
  //     하지만 함수 컴포넌트 내부에 변수를 선언한다면, 렌더링 될 때마다 값이 초기화 됩니다.
  //     그래서 해당 방법을 지양하는 것 같습니다 :)

  const getWorkbookList = async () => {
    const response = await requestGetWorkbookList({ lastWorkbookId, keyword });
    if (response.data.length === 0) {
      console.log("불러올 문제가 존재하지 않습니다.");
      return;
    }
    cursor.current = response.data[response.data.length - 1].id;
    setWorkbookList((prevState) => [...prevState, ...response.data]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setLastWorkbookId(cursor.current);
        }
      },
      { threshold: 0.5 }
    );
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getWorkbookList();
  }, [lastWorkbookId, keyword]);

  return (
    <Container>
      <SearchContainer
        keyword={keyword}
        setKeyword={setKeyword}
        setWorkbookList={setWorkbookList}
        cursor={cursor}
      />
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
          <div ref={obsRef} />
        </Tbody>
      </Table>
    </Container>
  );
}
export default WorkbookPage;
