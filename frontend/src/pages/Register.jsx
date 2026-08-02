import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function Register() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({

    name: "",

    email: "",

    password: ""

  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const response = await api.post(

        "/register",

        form

      );

      login(

        response.data.user,

        response.data.token

      );

      navigate("/");

    } catch (err) {

      setError(

        err.response?.data?.message ||

        "Registration failed."

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="container">

      <h2>Register</h2>

      {error && (

        <p style={{ color: "red" }}>

          {error}

        </p>

      )}

      <form onSubmit={handleSubmit}>

        <input

          name="name"

          placeholder="Name"

          value={form.name}

          onChange={handleChange}

          required

        />

        <br /><br />

        <input

          type="email"

          name="email"

          placeholder="Email"

          value={form.email}

          onChange={handleChange}

          required

        />

        <br /><br />

        <input

          type="password"

          name="password"

          placeholder="Password"

          value={form.password}

          onChange={handleChange}

          required

        />

        <br /><br />

        <button disabled={loading}>

          {loading ? "Registering..." : "Register"}

        </button>

      </form>

      <br />

      <Link to="/login">

        Already have an account? Login

      </Link>

    </div>

  );

}

export default Register;