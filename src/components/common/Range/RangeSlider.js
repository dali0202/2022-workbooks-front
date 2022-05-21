import {
  Input,
  Range,
  RangeLabel,
  Slider,
  Thumb,
  Track,
} from "./RangeSlider.styles";

function RangeSlider({ min, max, minDif, setMin, setMax }) {
  const setLeftValue = (e) => {
    const v = Number(e.target.value);
    if (v === undefined || NaN) {
      setMin(min);
      return;
    }
    max - v < minDif ? setMin(max - minDif) : setMin(v);
  };

  const setRightValue = (e) => {
    const v = Number(e.target.value);
    if (v === undefined) {
      setMax(max);
      return;
    }
    v - min < minDif ? setMax(min + minDif) : setMax(v);
  };

  return (
    <div style={{ width: "300px" }}>
      <Slider>
        <Input
          type="range"
          min="0"
          max="100"
          value={min}
          onChange={setLeftValue}
        />
        <Input
          type="range"
          min="0"
          max="100"
          value={max}
          onChange={setRightValue}
        />
        <Track>
          {/* 숫자만 입력가능하게 해주기 */}
          <RangeLabel
            value={min}
            position={["left", min]}
            direction="LEFT"
            onChange={setLeftValue}
          />
          <Range position={[min, 100 - max]} />
          <Thumb position={["left", min]} direction="LEFT" />
          <Thumb position={["right", 100 - max]} direction="RIGHT" />
          <RangeLabel
            value={max}
            direction="RIGHT"
            position={["right", 100 - max]}
            onChange={setRightValue}
          />
        </Track>
      </Slider>
    </div>
  );
}
export default RangeSlider;
