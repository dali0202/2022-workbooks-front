import { TextField } from '@mui/material';
import { Container, ErrorMessage } from './CustomInput.styles';

function CustomInput({
  label,
  inputStyle,
  labelStyle,
  onChange,
  error,
  errorMessage,
  errorVisible,
}) {
  return (
    <Container>
      <TextField
        label={label}
        variant='outlined'
        InputProps={{ style: inputStyle }}
        InputLabelProps={{ style: labelStyle }}
        onChange={onChange}
      />
      {error && errorVisible.current && (
        <ErrorMessage style={{ alignSelf: 'start' }}>
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  );
}
export default CustomInput;
