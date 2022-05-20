function FilterContainer({ filterList, setSelectedFilter }) {
  const onChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <select onChange={onChange}>
      {filterList.map((filter) => {
        return (
          <option key={filter} value={filter}>
            {filter}
          </option>
        );
      })}
    </select>
  );
}
export default FilterContainer;
