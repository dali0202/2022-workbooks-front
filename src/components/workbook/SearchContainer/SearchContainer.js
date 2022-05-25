import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, IconButton } from "@mui/material";
import { CustomButton, Input, SearchWrap } from "./SearchContainer.styles";

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
      <Input
        value={_keyword}
        onChange={change}
        placeholder="문제집 이름으로 검색하기"
      />
      <CustomButton onClick={search}>검색</CustomButton>
    </SearchWrap>
  );
}
export default SearchContainer;
