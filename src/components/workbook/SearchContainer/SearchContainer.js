import { Input, SearchWrap } from "./SearchContainer.styles";

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
      <button type="button" onClick={search}>
        <i className="fas fa-search" />
      </button>
    </SearchWrap>
  );
}
export default SearchContainer;
