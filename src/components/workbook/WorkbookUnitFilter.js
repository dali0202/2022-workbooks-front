import "../../css/workbook/workbookFilter.css";

function WorkbookUnitFilter({ unitList, selectedUnit, setSelectedUnit }) {
  const onClickUnit = (event) => {
    const unitId = Number(event.target.dataset.id);
    if (selectedUnit.includes(unitId)) {
      setSelectedUnit(selectedUnit.filter((id) => id !== unitId));
      return;
    }
    setSelectedUnit(selectedUnit.concat([unitId]));
  };
  return (
    <div>
      <h3>단원 선택</h3>
      {unitList.map((unit, index) => {
        return (
          <button
            className={
              selectedUnit.includes(index)
                ? "selected-button"
                : "default-button"
            }
            key={unit}
            type="button"
            data-id={index}
            onClick={onClickUnit}
          >
            {unit}
          </button>
        );
      })}
    </div>
  );
}
export default WorkbookUnitFilter;
