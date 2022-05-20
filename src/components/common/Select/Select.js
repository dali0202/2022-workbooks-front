import { Container } from "./Select.styles";

function Select({ name, optionList, setOption }) {
  return (
    <>
      <select
        name={name}
        onChange={(e) => {
          setOption(e.target.value);
        }}
      >
        {optionList.map((option) => {
          return (
            <option key={option} value={option}>
              {option !== 0 ? option : "전체"}
            </option>
          );
        })}
      </select>
      {name}
    </>
  );
}
export default Select;
