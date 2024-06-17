import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="container py-5 my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <i
          className="h1 bi bi-globe-americas mt-4 mb-3"
          style={{ color: "var(--bs-indigo)" }}
          width="100"
          height="100"
        ></i>
        <h1 className="text-body-emphasis">Front-end Países</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          Bienvenido a la aplicación de Front-end Países. Aquí podrás ver la
          lista de países y añadir nuevos países a la lista.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <Link
            to="/countries"
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill d-inline-flex align-items-center gap-2"
            type="button"
          >
            <span>Ver lista de países</span>
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <a
            href="https://github.com/ezemgil/paises"
            target="_blank"
            className="btn btn-outline-secondary btn-lg px-4 rounded-pill d-inline-flex align-items-center gap-2"
            type="button"
          >
            <span>Repositorio</span>
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export { Header };
