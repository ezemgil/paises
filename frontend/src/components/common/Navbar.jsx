import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/countries"
              className="nav-link"
              activeClassName="active"
            >
              Ver países
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              Acerca del proyecto
            </NavLink>
          </li>
        </ul>
      </header>
    </section>
  );
};

export { Navbar };
