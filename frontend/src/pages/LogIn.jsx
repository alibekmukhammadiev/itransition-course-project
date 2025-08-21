import { useTranslation } from "react-i18next";

// react-router-dom
import { Link } from "react-router-dom";

// components
import GoogleFacebook from "../components/GoogleFacebook";

export default function SignUp() {
  const { t } = useTranslation();
  const handleLogIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <form
        onSubmit={handleLogIn}
        style={{ maxWidth: "450px" }}
        className="d-flex flex-column gap-3 w-100 p-5 bg-light shadow rounded"
      >
        <h1 className="h3 text-center">{t("login.title")}</h1>
        <span className="text-center">
          {t("login.span")} <Link to="/signup">{t("login.link")}</Link>
        </span>
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            className="form-control"
            placeholder={t("login.email")}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder={t("login.password")}
            required
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "var(--purple-500)" }}
          className="btn text-light"
        >
          {t("login.title")}
        </button>

        <GoogleFacebook type="login" />
      </form>
    </div>
  );
}
