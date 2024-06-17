import express from "express";
const countryRouter = express.Router();

// Service functions
import countryService from "../services/country.service.js";

countryRouter.get("/search", countryService.getCountryByName);
countryRouter.get("/", countryService.getCountries);
countryRouter.get("/:id", countryService.getCountryById);
countryRouter.post("/", countryService.createCountry);
countryRouter.put("/:id", countryService.updateCountry);
countryRouter.delete("/:id", countryService.deleteCountry);

export default countryRouter;
