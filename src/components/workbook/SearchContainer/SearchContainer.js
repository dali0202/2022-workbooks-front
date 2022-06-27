import { useState } from 'react';
import { CustomButton, Input, SearchWrap } from './SearchContainer.styles';

function SearchContainer({ keyword, setKeyword, setWorkbookList, cursor }) {
  const [_keyword, _setKeyword] = useState(keyword);
  const change = (e) => {
    _setKeyword(e.target.value);
  };
  const search = () => {
    _keyword === '' ? setKeyword(null) : setKeyword(_keyword);
    cursor.current = null;
    setWorkbookList([]);
  };

  return (
    <SearchWrap>
      <Input
        value={_keyword === null ? '' : _keyword}
        onChange={change}
        placeholder='문제집 이름으로 검색하기'
      />
      <CustomButton onClick={search}>검색</CustomButton>
    </SearchWrap>
  );
}
export default SearchContainer;
