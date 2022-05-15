import Nav from "./Nav";

function BaseLayout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <h2 style={{ textAlign: "center" }}>foot</h2>
    </div>
  );
}
export default BaseLayout;
