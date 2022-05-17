import {
  LANGUAGE_CONVERTER,
  QUESTION_SEARCH_TYPE,
  SEARCH_TYPE_LIST,
} from "../constant/list";

function QuestionSearchContainerSelect({ searchType, setSearchType, onClick }) {
  const searchTypeList = Object.values(QUESTION_SEARCH_TYPE);

  const onChangeType = (event) => {
    const changedType = { ...searchType };
    changedType[event.target.name] = Number(event.target.value);
    setSearchType(() => changedType);
  };

  return (
    <div style={{ display: "inline" }}>
      {searchTypeList.map((tab) => {
        return (
          <div key={tab} style={{ display: "inline" }}>
            <select name={LANGUAGE_CONVERTER[tab]} onChange={onChangeType}>
              {SEARCH_TYPE_LIST[tab].map((value) => {
                return (
                  <option key={value} value={value}>
                    {value || "전체"}
                  </option>
                );
              })}
            </select>
            {tab}
          </div>
        );
      })}

      <button type="button" onClick={onClick}>
        조회
      </button>
    </div>
  );
}
export default QuestionSearchContainerSelect;
