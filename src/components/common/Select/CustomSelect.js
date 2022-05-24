import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CustomSelect({ labelId, id, label, value, onChange, options }) {
  return (
    <Box sx={{ height: "3rem", minWidth: 100 }}>
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          sx={{ height: "2.5rem", fontSize: "0.8rem" }}
          labelId={labelId}
          id={id}
          value={value}
          label={label}
          onChange={onChange}
        >
          {options.map((option) => {
            return (
              <MenuItem
                sx={{ fontSize: "0.8rem" }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
export default CustomSelect;
