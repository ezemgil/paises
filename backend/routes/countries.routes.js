import express from "express";
const countryRouter = express.Router();

// Service functions
import countryService from "../services/country.service.js";

countryRouter.get("/api/", countryService.getCountries);
countryRouter.get("/api/:id", countryService.getCountryById);
countryRouter.get("/api/search", countryService.getCountryByName);
countryRouter.post("/api/", countryService.createCountry);
countryRouter.put("/api/:id", countryService.updateCountry);
countryRouter.delete("/api/:id", countryService.deleteCountry);

export default countryRouter;
