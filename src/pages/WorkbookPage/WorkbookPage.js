import { useEffect, useState, useRef } from 'react';
import { requestGetWorkbookList } from '../../api';
import WorkbookItem from '../../components/workbook/WorkbookItem/WorkbookItem';
import SearchContainer from '../../components/workbook/SearchContainer/SearchContainer';
import { Column, Container, Table, Tbody, Thead } from './WorkbookPage.styles';

function WorkbookPage() {
  const [keyword, setKeyword] = useState(null);
  const [lastWorkbookId, setLastWorkbookId] = useState(null);
  const [workbookList, setWorkbookList] = useState([]);
  const obsRef = useRef(null);
  const cursor = useRef(null);

  const getWorkbookList = async () => {
    const response = await requestGetWorkbookList({ lastWorkbookId, keyword });
    if (response.data.length === 0) {
      console.log('불러올 문제가 존재하지 않습니다.');
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
          <Column style={{ width: '12%' }}>구분</Column>
          <Column style={{ width: '64%' }}>문제집 이름</Column>
          <Column style={{ width: '14%' }}>생성자</Column>
          <Column style={{ width: '14%' }}>생성일</Column>
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
