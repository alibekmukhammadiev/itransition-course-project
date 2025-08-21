import logo from "../images/logo.jpg";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      className="d-flex flex-sm-row flex-column gap-sm-5 gap-3 justify-content-center align-items-center px-sm-5 py-sm-3 px-3 py-3 shadow"
      style={{ backgroundColor: "var(--purple-500)" }}
    >
      {/* Left side: Logo + Title */}
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          className="rounded"
          style={{ height: "50px", width: "50px", objectFit: "contain" }}
        />
        <h1 className="text-white m-0 ms-3">Inventra</h1>
      </div>

      {/* Right side: Language Switcher */}
      <select
        className="form-select form-select-sm w-auto"
        
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="uz">O‘zbekcha</option>
      </select>
    </header>
  );
}
