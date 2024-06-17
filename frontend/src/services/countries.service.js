import httpService from "./http.service";
import { COUNTRIES } from "../config/server.config";

async function getAll() {
  return await httpService.get(COUNTRIES);
}

async function getById(country) {
  return await httpService.get(`${COUNTRIES}/${country.id}`);
}

async function getByName(name) {
  console.log(`${COUNTRIES}/search?name=${name}`);
  return await httpService.get(`${COUNTRIES}/search?name=${name}`);
}

async function create(country) {
  return await httpService.post(COUNTRIES, country);
}

async function update(country, countryUpdate) {
  return await httpService.put(`${COUNTRIES}/${country.id}`, countryUpdate);
}

async function remove(country) {
  return await httpService.delete(`${COUNTRIES}/${country.id}`);
}

export const countryService = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
};
