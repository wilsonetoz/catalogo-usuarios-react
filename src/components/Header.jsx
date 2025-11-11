import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Catálogo Avançado de Usuários</h1>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "ativo" : "")}>
          Início
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) => (isActive ? "ativo" : "")}
        >
          Sobre
        </NavLink>
      </nav>
    </header>
  );
}
