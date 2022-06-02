import { BUTTON_COLOR } from "../../constant/theme";
import { QUESTION_UNIT } from "../../constant/list";
import { Button } from "./Tag.styles";

function Tag({ name, item, selectedItem, setSelectedItem }) {
  const onClick = () => {
    if (selectedItem.includes(item)) {
      setSelectedItem(selectedItem.filter((id) => id !== item));
      return;
    }
    setSelectedItem(selectedItem.concat(item));
  };
  return (
    <Button
      key={item}
      onClick={onClick}
      width="3rem"
      color={
        selectedItem.includes(item) ? BUTTON_COLOR.SELECTED : BUTTON_COLOR.BASIC
      }
    >
      {name !== "unit" ? item : QUESTION_UNIT[item]}
    </Button>
  );
}
export default Tag;
