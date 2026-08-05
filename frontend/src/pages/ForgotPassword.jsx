import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "./Auth.css";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/forgot-password", {
        email,
      });

      setMessage(response.data.message);
      setEmail("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to send reset link."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-links">

      <form className="auth-form" onSubmit={handleSubmit}>

        <h2>Forgot Password</h2>
<p className="subtitle">
    Enter your email to receive a password reset link.
</p>
        {message && <p className="success">{message}</p>}

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p>
          <Link to="/login">
            Back to Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default ForgotPassword;