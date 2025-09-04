import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import GoogleFacebook from "../components/GoogleFacebook";

export default function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setAlert({ type: "success", message: "User created successfully!" });
        setTimeout(() => navigate("/login"), 1500); // redirect after 1.5s
      } else {
        setAlert({
          type: "danger",
          message: data.error || "Registration failed",
        });
      }
    } catch {
      setAlert({ type: "danger", message: "Network Error" });
    }
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

        {/* Alert */}
        {alert.message && (
          <div className={`alert alert-${alert.type} mt-2`} role="alert">
            {alert.message}
          </div>
        )}

        <div className="d-flex flex-column gap-3">
          <input
            type="text"
            className="form-control"
            placeholder={t("signup.placeholders.name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="form-control"
            placeholder={t("signup.placeholders.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder={t("signup.placeholders.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
