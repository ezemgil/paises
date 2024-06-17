import React from "react";

// CRUD = Create, Read, Update, Delete
export default function CountriesList({ Countries, Read, Update, Delete }) {
  return (
    <section className="container py-1 my-3">
      <table class="table table-striped fw-semibold text-center ">
        <thead class="h5">
          <td>Bandera</td>
          <td>Nombre</td>
          <td>ISO3</td>
          <td>Acciones</td>
        </thead>
        <tbody id="countries-table" class="fw-normal">
          {Countries &&
            Countries.map((country) => (
              <tr>
                <td>
                  <span
                    class={`flag flag-${country.iso2.toLocaleLowerCase()}`}
                  ></span>
                </td>
                <td>{country.name}</td>
                <td>{country.iso3}</td>
                <td>
                  <button
                    class="btn btn-info me-1"
                    title="Ver país"
                    onClick={() => Read(country)}
                  >
                    <i className="fa fa-eye"></i>
                  </button>
                  <button
                    class="btn btn-warning me-1"
                    title="Editar país"
                    onClick={() => Update(country)}
                  >
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button
                    class="btn btn-danger"
                    title="Eliminar país"
                    onClick={() => Delete(country)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
