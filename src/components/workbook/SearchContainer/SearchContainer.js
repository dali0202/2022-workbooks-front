import { useState } from "react";
import { Button, Input, SearchWrap } from "./SearchContainer.styles";

function SearchContainer({ keyword, setKeyword }) {
  const [_keyword, _setKeyword] = useState(keyword);
  const change = (e) => {
    _setKeyword(e.target.value);
  };
  const search = () => {
    setKeyword(_keyword);
  };

  return (
    <SearchWrap>
      <Input value={_keyword} onChange={change} />
      <Button
        onClick={search}
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
      />
    </SearchWrap>
  );
}
export default SearchContainer;
