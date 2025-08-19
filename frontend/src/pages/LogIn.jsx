// react-router-dom
import { Link } from "react-router-dom";

// components
import GoogleFacebook from "../components/GoogleFacebook";


export default function SignUp() {
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
        <h1 className="h3 text-center">Log In</h1>
        <span className="text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
        <div className="d-flex flex-column gap-3">
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
          Log In
        </button>

        <GoogleFacebook type="log in" />
      </form>
    </div>
  );
}
