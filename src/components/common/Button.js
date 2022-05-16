function Button({ children, isSelected, selectedStyles, styles, onClick }) {
  return (
    <Container
      isSelected={isSelected}
      selectedStyles={selectedStyles}
      styles={styles}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
export default Button;
