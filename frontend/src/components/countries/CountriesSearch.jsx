import React from "react";

export default function CountriesSearch({
  Name,
  setName,
  SearchByName,
  Create,
}) {
  return (
    <section className="container py-1 my-1">
      <div className="d-flex gap-2">
        <input
          type="text"
          id="search-input"
          className="form-control"
          placeholder="Buscar país por nombre"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={SearchByName}>
            <i class="fa-solid fa-magnifying-glass"></i>Buscar
          </button>
          <button className="btn btn-warning" onClick={Create}>
            <i class="fa-solid fa-plus"></i>Añadir
          </button>
        </div>
      </div>
    </section>
  );
}
