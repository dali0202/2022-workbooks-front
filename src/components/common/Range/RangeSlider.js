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
    const v = Number(e.target.value / 100);
    if (v === undefined || NaN) {
      setMin(min);
      return;
    }
    max - v < minDif ? setMin(max - minDif) : setMin(v);
  };

  const setRightValue = (e) => {
    const v = Number(e.target.value / 100);
    if (v === undefined) {
      setMax(max);
      return;
    }
    v - min < minDif ? setMax(min + minDif) : setMax(v);
  };

  return (
    <div style={{ width: "24rem" }}>
      <Slider>
        <Input type="range" value={min * 100} onChange={setLeftValue} />
        <Input type="range" value={max * 100} onChange={setRightValue} />
        <Track>
          {/* 숫자만 입력가능하게 해주기 */}
          <Range position={[min * 100, 100 - max * 100]} />
          <Thumb position={["left", min * 100]} direction="LEFT" />
          <Thumb position={["right", 100 - max * 100]} direction="RIGHT" />
          <RangeLabel
            value={min * 100}
            position={["left", min * 100]}
            direction="RIGHT"
            onChange={setLeftValue}
          />
          <RangeLabel
            value={max * 100}
            direction="LEFT"
            position={["right", 100 - max * 100]}
            onChange={setRightValue}
          />
        </Track>
      </Slider>
    </div>
  );
}
export default RangeSlider;
