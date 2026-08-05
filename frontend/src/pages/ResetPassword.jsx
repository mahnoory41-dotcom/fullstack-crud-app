import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../services/api";
import "./Auth.css";
function ResetPassword() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    setLoading(true);

    try {
      
      const response = await api.post("/reset-password", {
        token,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Unable to reset password."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-links">

      <form className="auth-form" onSubmit={handleSubmit}>

        <h2>Reset Password</h2>
<p className="subtitle">
    Choose a strong new password for your account.
</p>
        {message && <p className="success">{message}</p>}

        {error && <p className="error">{error}</p>}

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) =>
            setPasswordConfirmation(e.target.value)
          }
          required
        />

        <button disabled={loading}>
          {loading ? "Updating..." : "Reset Password"}
        </button>

      </form>

    </div>
  );
}

export default ResetPassword;