const PORT = 3000;
const apiURL = `http://localhost:${PORT}/api/v1`;

const getCountries = () => {
  fetch(`${apiURL}/countries`)
    .then((response) => response.json())
    .then((data) => {
      displayCountries(data);
    })
    .catch((error) => console.error(error));
};

function displayCountries(countries) {
  const table = document.getElementById("countries-table");
  let content = "";
  countries.forEach((country) => {
    content += `
      <tr>
        <td><span class="flag flag-${country.iso2.toLocaleLowerCase()}"></span></td>
        <td>${country.name}</td>
        <td>${country.iso3}</td>
        <td>${country.iso2}</td>
        <td>${country.currency}</td>
        <td>${country.latitude}</td>
        <td>${country.longitude}</td>
        <td>
            <button class="btn btn-info" onclick="editCountry(${country.id})">
                <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-danger" onclick="deleteCountry(${
              country.id
            })">
                <i class="bi bi-trash-fill"></i>
            </button>
        </td>
      </tr>
    `;
  });
  table.innerHTML = content;
}

function searchCountryByName() {
  const inputSearch = document.getElementById("search-input").value;
  fetch(`${apiURL}/countries/search?name=${inputSearch}`)
    .then((response) => response.json())
    .then((data) => {
      displayCountries(data);
    })
    .catch((error) => console.error(error));
}

function editCountry(id) {}

function deleteCountry(id) {
  fetch(`${apiURL}/countries/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      getCountries();
    })
    .catch((error) => console.error(error));
}

function addCountry() {
  const name = document.getElementById("name-input").value;
  const iso3 = document.getElementById("iso3-input").value;
  const iso2 = document.getElementById("iso2-input").value;
  const currency = document.getElementById("currency-input").value;
  const latitude = document.getElementById("latitude-input").value;
  const longitude = document.getElementById("longitude-input").value;

  const country = {
    name,
    iso3,
    iso2,
    currency,
    latitude,
    longitude,
  };

  console.log(country);

  fetch(`${apiURL}/countries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(country),
  })
    .then((response) => response.json())
    .then(() => {
      getCountries();
    })
    .catch((error) => console.error(error));
}

getCountries();
