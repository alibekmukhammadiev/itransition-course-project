import logo from "../images/logo.jpg";
export default function Header() {
  return (
    <header
      className="d-flex flex-sm-row flex-column gap-sm-0 gap-1 justify-content-center align-items-center px-5 py-3 shadow"
      style={{ backgroundColor: "var(--purple-500)" }}
    >
      <img
        src={logo}
        alt="Logo"
        className="rounded"
        style={{ height: "60px", width: "60px", objectFit: "contain" }}
      />

      <h1 className="text-white m-0 ms-3">Management App</h1>
    </header>
  );
}
