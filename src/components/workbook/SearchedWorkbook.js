import useMovePage from "../../hooks/useMovePage";

function SearchedWorkbook({ workbook }) {
  const { goWorkbookDetailPage } = useMovePage();
  const onClick = () => {
    goWorkbookDetailPage(workbook.id);
  };
  return (
    <tr>
      <td>
        <div onClick={onClick}>{workbook.title}</div>
      </td>
      <td>{workbook.userName}</td>
    </tr>
  );
}
export default SearchedWorkbook;
