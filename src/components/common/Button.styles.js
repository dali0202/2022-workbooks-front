const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  width: fit-content;
  min-width: fit-content;
  ${({ styles }) => styles && styles}
  ${({ isSelected, selectedStyles }) => isSelected && selectedStyles}
`;
export { Container };
