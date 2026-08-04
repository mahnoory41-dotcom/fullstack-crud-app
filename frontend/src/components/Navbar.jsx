import "./Navbar.css";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user } = useAuth();

  return (
    <nav className="navbar">

      <h2>Laravel + React CRUD</h2>

      {user && (

        <div className="navbar-user">

          <span>

            Welcome, <strong>{user.name}</strong>

          </span>

          <span
            className={
              user.role === "admin"
                ? "role admin"
                : "role user"
            }
          >

            {user.role.toUpperCase()}

          </span>

        </div>

      )}

    </nav>
  );
}

export default Navbar;