import logo from "../images/logo.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header
      className="d-flex flex-sm-row flex-column gap-sm-5 gap-3 justify-content-between align-items-center px-sm-5 py-sm-3 px-3 py-3 shadow"
      style={{ backgroundColor: "var(--purple-500)" }}
    >
      <div className="container d-flex justify-content-between">
        {/* Left: Logo and Title */}
        <div className=" d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="rounded"
            style={{ height: "50px", width: "50px", objectFit: "contain" }}
          />
          <h1 className="text-white m-0 ms-3">Inventra</h1>
        </div>

        {/* Right: Language and Auth */}
        <div className="d-flex align-items-center gap-3">
          {/* Language Selector */}
          <select
            className="form-select form-select-sm w-auto"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O‘zbekcha</option>
          </select>

          {/* Auth Buttons */}
          {token ? (
            <button className="btn btn-sm btn-danger" onClick={handleLogout}>
              {t("header.logout")}
            </button>
          ) : (
            <div className="d-flex gap-2">
              {location.pathname !== "/login" && (
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => navigate("/login")}
                >
                  {t("header.login")}
                </button>
              )}
              {location.pathname !== "/register" && (
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => navigate("/register")}
                >
                  {t("header.register")}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
