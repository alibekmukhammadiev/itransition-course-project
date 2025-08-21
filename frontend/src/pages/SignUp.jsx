import { useTranslation } from "react-i18next";

// react-router-dom
import { Link } from "react-router-dom";

// components
import GoogleFacebook from "../components/GoogleFacebook";

export default function SignUp() {
  const { t } = useTranslation();
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <form
        onSubmit={handleSignUp}
        style={{ maxWidth: "450px" }}
        className="d-flex flex-column gap-3 w-100 p-5 bg-light shadow rounded"
      >
        <h1 className="h3 text-center">{t("signup.title")}</h1>
        <span className="text-center">
          {t("signup.span")} <Link to="/login">{t("signup.link")}</Link>
        </span>
        <div className="d-flex flex-column gap-3">
          <input
            type="text"
            className="form-control"
            placeholder={t("signup.placeholders.name")}
            required
          />
          <input
            type="email"
            className="form-control"
            placeholder={t("signup.placeholders.email")}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder={t("signup.placeholders.password")}
            required
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "var(--purple-500)" }}
          className="btn text-light"
        >
          {t("signup.button")}
        </button>
        <GoogleFacebook type="signup" />
      </form>
    </div>
  );
}
