import { LANGUAGE_CONVERTER } from "../constant/list";

function QuestionSearchContainerInput({
  searchTypeList,
  searchType,
  setSearchType,
}) {
  const onChangeType = (event) => {
    const changedType = Object.assign([], searchType);
    changedType[LANGUAGE_CONVERTER[event.target.dataset.type]] =
      event.target.value;
    setSearchType(() => changedType);
  };
  return (
    <div>
      {searchTypeList.map((tab) => {
        return (
          <div key={tab}>
            {tab}
            <input
              key={tab}
              data-type={tab}
              value={searchType[LANGUAGE_CONVERTER[tab]]}
              onChange={onChangeType}
            />
          </div>
        );
      })}
    </div>
  );
}
export default QuestionSearchContainerInput;
