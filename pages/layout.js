import Nav from "../components/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
