import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <h1 className="mb-4">
        Acerca de: <code className="h1">Países</code>
      </h1>
      <p>
        El fin de esta aplicación web es mostrar una lista de países y permitir
        al usuario agregar nuevos países a la lista. Nació como un proyecto de
        aprendizaje para el manejo de tecnologías tanto en el frontend como en
        el backend.
      </p>
      <p>
        La idea de utilzar Países para este proyecto surge desde la necesidad de
        contar con datos para poder crear un sistema básico que permita la alta,
        baja, modificación y consulta de registros. Se basó principalmente en el
        archivo <code>countries.json</code>, que luego fue convertido a una base
        de datos en SQLite.
      </p>
      <span>
        Si desea ver la lista de países, haga clic en el enlace a continuación:{" "}
        <Link to="/countries">
          Países
          <i className="fas fa-globe-americas mx-1"></i>
        </Link>
        o bien, el archivo JSON original:{" "}
        <a
          href="https://github.com/ezemgil/paises/blob/master/countries.json"
          target="_blank"
          rel="noreferrer"
        >
          countries.json
          <i className="fas fa-file-code mx-1"></i>
        </a>
      </span>
      <hr className="my-4" />
      <h2 className="mb-4">Backend</h2>
      <p>
        En el backend se utilizó Node.js con Express para crear un servidor que
        se conecta a una base de datos SQLite. Se crearon los servicios
        necesarios para poder realizar las operaciones CRUD sobre la tabla de
        países.
      </p>
      <p>
        Se crearon las rutas para poder realizar las operaciones CRUD sobre la
        tabla de países. Se utilizó el ORM Sequelize para la conexión con la
        base de datos. La tabla de países cuenta con los siguientes campos:{" "}
        <code>id</code>, <code>name</code>, <code>iso3</code>, <code>iso2</code>
        , <code>currency</code>, <code>latitude</code> y <code>longitude</code>.
      </p>
      <h4 className="mb-2 mt-4">Endpoints</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Método</th>
            <th>URI</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>
              <code>/countries</code>
            </td>
            <td>Obtiene todos los países de la base de datos.</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>
              <code>/countries/:id</code>
            </td>
            <td>Obtiene un país específico por su ID.</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>
              <code>/countries/search?name=Nombre</code>
            </td>
            <td>
              Obtiene un país específico por su nombre. El parámetro de consulta
              "Nombre" se utiliza para buscar el país en la base de datos.
            </td>
          </tr>
          <tr>
            <td>POST</td>
            <td>
              <code>/countries</code>
            </td>
            <td>Crea un nuevo país en la base de datos.</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>
              <code>/countries/:id</code>
            </td>
            <td>Actualiza un país existente por su ID.</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>
              <code>/countries/:id</code>
            </td>
            <td>Elimina un país de la base de datos por su ID.</td>
          </tr>
        </tbody>
      </table>
      <h4 className="mb-2 mt-4">Tecnologías utilizadas</h4>
      <ul className="list-group">
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">Node.js</li>
        <li className="list-group-item">Express</li>
        <li className="list-group-item">SQLite</li>
        <li className="list-group-item">Sequelize</li>
      </ul>
      <hr className="my-4" />
      <h2 className="mb-4">Frontend</h2>
      <p>
        En el frontend se utilizó React para crear una aplicación web que
        permite al usuario realizar las operaciones CRUD sobre la lista de
        países. Se crearon componentes para la búsqueda, listado, creación y
        modificación de países.
      </p>
      <p>
        Se utilizó Bootstrap para el diseño de la aplicación. Se crearon
        componentes para la búsqueda, listado, creación y modificación de
        países. Se utilizó Axios para la conexión con el backend.
      </p>
      <h4 className="mb-2 mt-4">Tecnologías utilizadas</h4>
      <ul className="list-group">
        <li className="list-group-item">HTML</li>
        <li className="list-group-item">CSS</li>
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">Bootstrap</li>
        <li className="list-group-item">Axios</li>
      </ul>
      <hr className="my-4" />
      <h2 className="mb-4">Más información</h2>
      <p>
        Para obtener más información sobre el proyecto, visite el repositorio en{" "}
        <a
          href="https://github.com/ezemgil/paises"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <i className="fab fa-github mx-1"></i>
        </a>
      </p>
    </div>
  );
};

export default About;
