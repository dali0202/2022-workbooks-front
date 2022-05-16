import {
  LANGUAGE_CONVERTER,
  QUESTION_SEARCH_TYPE,
  SEARCH_TYPE_LIST,
} from "../constant/list";

function QuestionSearchContainerSelect({ searchType, setSearchType }) {
  const searchTypeList = Object.values(QUESTION_SEARCH_TYPE);

  const onChangeType = (event) => {
    const changedType = Object.assign([], searchType);
    changedType[event.target.name] = event.target.value;
    setSearchType(() => changedType);
  };

  return (
    <div style={{ display: "inline" }}>
      {searchTypeList.map((tab) => {
        return (
          <div key={tab} style={{ display: "inline" }}>
            {tab}
            <select name={LANGUAGE_CONVERTER[tab]} onChange={onChangeType}>
              {SEARCH_TYPE_LIST[tab].map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </div>
  );
}
export default QuestionSearchContainerSelect;
