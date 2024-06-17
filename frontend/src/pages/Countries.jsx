import React, { useEffect, useState } from "react";

// Components
import CountriesList from "../components/countries/CountriesList";
import CountriesForm from "../components/countries/CountriesForm";
import CountriesSearch from "../components/countries/CountriesSearch";

// Services
import { countryService } from "../services/countries.service";

export default function Countries() {
  // States
  const [CRUD, setCRUD] = useState("RA");
  const [Countries, setCountries] = useState([]);
  const [Country, setCountry] = useState({});
  const [Name, setName] = useState("");

  // Methods
  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  async function FindAll() {
    const response = await countryService.getAll();
    setCountries(response.data);
  }

  async function FindById(country, CRUDaction) {
    const response = await countryService.getById(country);
    setCountry(response.data);
    setCRUD(CRUDaction);
  }

  async function SearchByName(name) {
    const response = await countryService.getByName(name);
    setCountries(response.data);
  }

  function Read(country) {
    FindById(country, "R");
  }

  function Update(country) {
    FindById(country, "U");
  }

  function Create() {
    setCRUD("C");
    setCountry({
      name: "",
      iso3: "",
      iso2: "",
      currency: "",
      latitude: 0.0,
      longitude: 0.0,
    });
  }

  async function Delete(country) {
    await countryService.remove(country);
    await FindAll();
  }

  async function Save(country) {
    try {
      if (CRUD === "C") {
        await countryService.create(country);
      } else {
        await countryService.update(country, country);
      }
    } catch (error) {
      return;
    }

    await FindAll();
    Return();
  }

  function Return() {
    setCRUD("RA");
  }

  return (
    <>
      {CRUD === "RA" && (
        <CountriesSearch
          Name={Name}
          setName={setName}
          SearchByName={() => SearchByName(Name)}
          Create={Create}
        />
      )}

      {CRUD === "RA" && Countries?.length > 0 && (
        <CountriesList {...{ Countries, Read, Update, Delete }} />
      )}

      {CRUD === "RA" && Countries?.length === 0 && (
        <div className="container">
          <div className="alert alert-info">No se encontraron países</div>
        </div>
      )}

      {CRUD !== "RA" && <CountriesForm {...{ CRUD, Country, Save, Return }} />}
    </>
  );
}
