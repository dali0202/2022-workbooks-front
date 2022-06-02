import { TextField } from "@mui/material";
import { Container, ErrorMessage } from "./CustomInput.styles";

function CustomInput({
  label,
  inputStyle,
  labelStyle,
  onChange,
  error,
  errorMessage,
}) {
  return (
    <Container>
      <TextField
        label={label}
        variant="outlined"
        InputProps={{ style: inputStyle }}
        InputLabelProps={{ style: labelStyle }}
        onChange={onChange}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
export default CustomInput;
