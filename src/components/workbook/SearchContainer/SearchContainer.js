import { Button, Input, SearchWrap } from "./SearchContainer.styles";

function SearchContainer({ keyword, setKeyword }) {
  const change = (e) => {
    setKeyword(e.target.value);
  };
  const search = () => {
    console.log(keyword);
  };

  return (
    <SearchWrap>
      <Input value={keyword} onChange={change} />
      <Button src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
    </SearchWrap>
  );
}
export default SearchContainer;
