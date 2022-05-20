import { Container } from "./Button.styles";

function Button({
  children,
  backgroundType,
  sizeType,
  color,
  isSelected,
  onClick,
}) {
  return (
    <Container
      backgroundType={backgroundType}
      sizeType={sizeType}
      color={color}
      isSelected={isSelected}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
export default Button;
