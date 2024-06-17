# CRUD Países

Este proyecto surge como parte de una evaluación sumativa para la materia "Desarrollo de Software (DDS)" de la Universidad Tecnológica Nacional (UTN), Facultad Regional de Córdoba (FRC). El objetivo principal es desarrollar una aplicación sencilla que permita realizar operaciones CRUD (Create, Read, Update, Delete) utilizando un backend construido con Express y una base de datos SQLite.


## Características

- El backend utiliza las siguientes tecnologías: Express, Sequelize, SQLite3, dotenv y CORS.
- Se crea una base de datos SQLite con una tabla llamada "Países", que contiene los siguientes atributos: id (PK), name, iso3, iso2, currency, latitude y longitude.
- El frontend no utiliza ningún framework, excepto la librería de Bootstrap 5 para facilitar la comunicación con el backend.
- Las tecnologías utilizadas incluyen HTML, CSS (con Bootstrap), JS, Express, SQLite3, CORS y Sequelize.

# Backend
## Uso

- Para instalar las dependencias, ejecuta la siguiente línea de comandos:
```npm i cors sequelize express sqlite3```
- Para inicializar el servidor, dirígete al directorio ```Backend```:
``` cd "./backend/" ``` y luego ejecuta en la terminal
``` node app.js ```
Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación a través de tu navegador web. La interfaz te permitirá realizar operaciones CRUD en la base de datos de países.

## Endpoints

La aplicación debería tener los siguientes endpoints para realizar operaciones CRUD en la base de datos de países:

| Método   | URI | Descripción |
|----------|----------|----------|
| ```GET```|```/countries```|Obtiene todos los países de la base de datos.|
| ```GET```|```/countries/:id```|Obtiene un país específico por su ID.|
| ```GET```|```/countries/search?name=Nombre```|Obtiene un país específico por su nombre. El parámetro de consulta "```Nombre```" se utiliza para buscar el país en la base de datos.|
| ```POST```|```/countries```|Crea un nuevo país en la base de datos.|
| ```PUT```|```/countries/:id```|Actualiza un país existente por su ID.|
| ```DELETE```|```/countries/:id```|Elimina un país de la base de datos por su ID.|


Cada endpoint debería manejar las solicitudes HTTP correspondientes y realizar las operaciones CRUD en la base de datos utilizando los controladores adecuados.

> Para testear cada endpoint, sin la necesidad de hacer consultas desde el frontend se utilizó la herramienta [Postman](https://www.postman.com/)

# Frontend
## Uso

- Para inicializar el frontend, dirígete al directorio ```Frontend```:
``` cd "./frontend/" ``` y luego ejecuta en la terminal
``` npm run dev ```
Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación a través de tu navegador web. La interfaz te permitirá realizar operaciones CRUD en la base de datos de países.

## Interfaz

La interfaz de usuario debería permitir al usuario realizar las siguientes operaciones CRUD en la base de datos de países:

- **Crear un nuevo país**: El usuario debería poder ingresar los datos del país (nombre, ISO3, ISO2, moneda, latitud y longitud) en un formulario y enviarlos al backend para su almacenamiento en la base de datos.
- **Leer un país existente**: El usuario debería poder ver todos los países existentes en la base de datos en una tabla.
- **Actualizar un país existente**: El usuario debería poder seleccionar un país de la tabla y actualizar sus datos en un formulario.
- **Eliminar un país existente**: El usuario debería poder seleccionar un país de la tabla y eliminarlo de la base de datos.

La interfaz debería ser fácil de usar y permitir al usuario interactuar con la base de datos de países de forma intuitiva.