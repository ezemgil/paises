import React from "react";
import { useForm } from "react-hook-form";

export default function CountriesForm({ CRUD, Country, Save, Return }) {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: Country });

  const onSubmit = (data) => {
    Save(data);
  };

  return (
    <section className="container my-5 py-5">
      <h2 className="text-center mb-5">
        {CRUD === "C"
          ? "Añadir nuevo país"
          : CRUD === "R"
          ? "Detalles del país"
          : CRUD === "U"
          ? "Actualizar país"
          : ""}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={CRUD === "R"}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ingrese el nombre del país"
              autoFocus
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre del país es requerido",
                },
                minLength: {
                  value: 3,
                  message:
                    "El nombre del país debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El nombre del país debe tener como máximo 50 caracteres",
                },
              })}
              className={"form-control " + (errors?.Name ? "is-invalid" : "")}
            />
            {errors?.Name && touchedFields?.Name && (
              <div className="invalid-feedback">{errors?.Name?.message}</div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="ISO3" className="form-label">
                ISO3
              </label>
              <input
                type="text"
                placeholder="Ingrese el código ISO3 del país"
                {...register("iso3", {
                  required: true,
                  minLength: {
                    value: 3,
                    message:
                      "El código ISO3 del país debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 3,
                    message: "El código ISO3 del país debe tener 3 caracteres",
                  },
                })}
                className={"form-control " + (errors?.ISO3 ? "is-invalid" : "")}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="ISO2" className="form-label">
                ISO2
              </label>
              <input
                type="text"
                placeholder="Ingrese el código ISO2 del país"
                {...register("iso2", {
                  required: true,
                  minLength: {
                    value: 2,
                    message:
                      "El código ISO2 del país debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 2,
                    message: "El código ISO2 del país debe tener 2 caracteres",
                  },
                })}
                className={"form-control " + (errors?.ISO2 ? "is-invalid" : "")}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Currency" className="form-label">
              Moneda
            </label>
            <input
              type="text"
              placeholder="Ingrese la moneda del país"
              {...register("currency", {
                required: true,
                minLength: {
                  value: 3,
                  message:
                    "La moneda del país debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 5,
                  message:
                    "La moneda del país debe tener como máximo 5 caracteres",
                },
              })}
              className={
                "form-control " + (errors?.Currency ? "is-invalid" : "")
              }
            />
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="Latitude" className="form-label">
                Latitud
              </label>
              <input
                type="number"
                step=".00000001"
                placeholder="Ingrese la latitud del país"
                {...register("latitude", {
                  required: true,
                  pattern: {
                    pattern: {
                      value: /^\d+(\.\d{1,8})?$/,
                      message: "Ingrese un número válido con hasta 8 decimales",
                    },
                    message: "Ingrese una latitud válida",
                  },
                })}
                className={
                  "form-control " + (errors?.Latitude ? "is-invalid" : "")
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="Longitude" className="form-label">
                Longitud
              </label>
              <input
                type="number"
                step=".00000001"
                placeholder="Ingrese la longitud del país"
                {...register("longitude", {
                  required: true,
                  pattern: {
                    pattern: {
                      value: /^\d+(\.\d{1,8})?$/,
                      message: "Ingrese un número válido con hasta 8 decimales",
                    },
                    message: "Ingrese una longitud válida",
                  },
                })}
                className={
                  "form-control " + (errors?.Longitude ? "is-invalid" : "")
                }
              />
            </div>
          </div>
        </fieldset>
        <div className="container py-2 my-3">
          <div className="row">
            {CRUD !== "R" && (
              <div className="col-12 col-sm-6 mb-2">
                <button type="submit" className="btn btn-primary w-100">
                  Guardar
                </button>
              </div>
            )}
            <div className={`col-12 col-sm-${CRUD !== "R" ? "6" : "12"} mb-2`}>
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={Return}
              >
                {CRUD === "C" ? "Cancelar" : "Volver"}
              </button>
            </div>
          </div>
        </div>

        {isSubmitted && !isValid && (
          <div className="alert alert-danger mt-3" role="alert">
            <ul className="m-0">
              {Object.values(errors).map(
                (error, index) =>
                  error.message && <li key={index}>{error.message}</li>
              )}
            </ul>
          </div>
        )}
      </form>
    </section>
  );
}
