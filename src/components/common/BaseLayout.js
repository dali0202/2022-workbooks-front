import Nav from "./Nav/Nav";

function BaseLayout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
export default BaseLayout;
