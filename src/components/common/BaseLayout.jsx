import Nav from "./Nav";

function BaseLayout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <h2>foot</h2>
    </div>
  );
}
export default BaseLayout;
