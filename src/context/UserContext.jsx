import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  // Sesión simulada: al recargar comienza activa, como pide la pauta.
  const [token, setToken] = useState(true);
  // Cerrar sesión actualiza todos los componentes que usan el contexto.
  const logout = () => setToken(false);

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
