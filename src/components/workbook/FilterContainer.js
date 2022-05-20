function FilterContainer({ sortList, setSelectedFilter }) {
  const onChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <select onChange={onChange}>
      {sortList.map((sort) => {
        return (
          <option key={sort} value={sort}>
            {sort}
          </option>
        );
      })}
    </select>
  );
}
export default FilterContainer;
