import "../../css/workbook/workbookFilter.css";
import Button from "../common/Button/Button";
import { BUTTON_COLOR } from "../constant/theme";

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

  const clickPoint = (event) => {
    console.log(selectedPoint);
    const point = Number(event.target.value);
    if (selectedPoint.includes(point)) {
      setSelectedPoint(selectedPoint.filter((_point) => _point !== point));
      return;
    }
    setSelectedPoint(selectedPoint.concat([point]));
  };

  return (
    <div>
      <div>
        <h5>단원 선택</h5>
        {unitList.map((unit, index) => {
          return (
            <Button
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
            </Button>
          );
        })}
      </div>
      <div>
        <h5>점수 선택</h5>
        {pointList.map((point) => {
          return (
            <Button
              color={
                selectedPoint.includes(point)
                  ? BUTTON_COLOR.SELECTED
                  : BUTTON_COLOR.BASIC
              }
              key={point}
              onClick={clickPoint}
            >
              {point}점
            </Button>
          );
        })}
      </div>
    </div>
  );
}
export default WorkbookUnitFilter;
