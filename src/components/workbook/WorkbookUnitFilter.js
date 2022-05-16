import "../../css/workbook/workbookFilter.css";

function WorkbookUnitFilter({
  unitList,
  pointList,
  selectedUnit,
  selectedPoint,
  setSelectedUnit,
  setSelectedPoint,
}) {
  const onClickUnit = (event) => {
    const unitId = Number(event.target.dataset.id);
    if (selectedUnit.includes(unitId)) {
      setSelectedUnit(selectedUnit.filter((id) => id !== unitId));
      return;
    }
    setSelectedUnit(selectedUnit.concat([unitId]));
  };

  const onClickPoint = (event) => {
    const pointId = Number(event.target.dataset.id);
    if (selectedPoint.includes(pointId)) {
      setSelectedPoint(selectedPoint.filter((id) => id !== pointId));
      return;
    }
    setSelectedPoint(selectedPoint.concat([pointId]));
  };

  return (
    <div>
      <div>
        <h5>단원 선택</h5>
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
      <div>
        <h5>점수 선택</h5>
        {pointList.map((point) => {
          return (
            <button
              className={
                selectedPoint.includes(point)
                  ? "selected-button"
                  : "default-button"
              }
              key={point}
              type="button"
              data-id={point}
              onClick={onClickPoint}
            >
              {point}점
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default WorkbookUnitFilter;
