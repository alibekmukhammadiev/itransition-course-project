import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import GoogleFacebook from "../components/GoogleFacebook";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        setAlert({ type: "success", message: "Login successful!" });
        setTimeout(() => navigate("/"), 1500); // redirect after 1.5s
      } else {
        setAlert({ type: "danger", message: data.error || "Login failed" });
      }
    } catch {
      setAlert({ type: "danger", message: "Network Error" });
    }
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
          {t("login.span")} <Link to="/register">{t("login.link")}</Link>
        </span>

        {/* Alert */}
        {alert.message && (
          <div className={`alert alert-${alert.type} mt-2`} role="alert">
            {alert.message}
          </div>
        )}

        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            className="form-control"
            placeholder={t("login.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder={t("login.password")}
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
          {t("login.title")}
        </button>

        <GoogleFacebook type="login" />
      </form>
    </div>
  );
}
