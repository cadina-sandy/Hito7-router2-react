import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { logout } = useContext(UserContext);
  return (
    <section className="form-card">
      <h1>Mi perfil</h1>
      <p>Email: sandy@cadin.com</p>
      <button type="button" className="primary-button" onClick={logout}>Cerrar sesión</button>
    </section>
  );
}

export default Profile;
