// react-router-dom
import { Link } from "react-router-dom";

// components
import GoogleFacebook from "../components/GoogleFacebook";

export default function SignUp() {
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
        <h1 className="h3 text-center">Create an account</h1>
        <span className="text-center">
          Already have an account? <Link to="/login">Log in</Link>
        </span>
        <div className="d-flex flex-column gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "var(--purple-500)" }}
          className="btn text-light"
        >
          Create account
        </button>
        <GoogleFacebook type="sign up" />
      </form>
    </div>
  );
}
