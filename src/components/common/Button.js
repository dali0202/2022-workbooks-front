function Button({ children, isSelected, onClick }) {
  return (
    <button type="button" isSelected={isSelected} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
