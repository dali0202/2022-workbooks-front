import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CustomSelect({
  width,
  height,
  fontSize,
  labelId,
  id,
  label,
  value,
  onChange,
  options,
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: width }} size='small'>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        sx={{ height, fontSize }}
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <MenuItem sx={{ fontSize }} key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
export default CustomSelect;
