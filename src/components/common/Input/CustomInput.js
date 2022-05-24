import { TextField } from "@mui/material";

function CustomInput({ label, inputStyle, labelStyle, onChange }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      InputProps={{ style: inputStyle }}
      InputLabelProps={{ style: labelStyle }}
      onChange={onChange}
    />
  );
}
export default CustomInput;
