import { Op } from "sequelize";
import Countries from "../models/Countries.js";

// Find all
const getCountryByName = async (req, res) => {
  try {
    const country = await Countries.findAll({
      where: {
        name: {
          [Op.like]: `${req.query.name}%`,
        },
      },
    });
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Find by id
const getCountryById = async (req, res) => {
  try {
    const country = await Countries.findByPk(req.params.id);
    if (country) {
      res.status(200).json(country);
    } else {
      res.status(404).json({ error: "Country not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Find all
const getCountries = async (req, res) => {
  try {
    const countries = await Countries.findAll();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create
const createCountry = async (req, res) => {
  try {
    const country = await Countries.create(req.body);
    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateCountry = async (req, res) => {
  try {
    const country = await Countries.findByPk(req.params.id);
    if (country) {
      await country.update(req.body);
      res.status(200).json(country);
    } else {
      res.status(404).json({ error: "Country not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete
const deleteCountry = async (req, res) => {
  try {
    const country = await Countries.findByPk(req.params.id);
    if (country) {
      await country.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Country not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getCountryByName,
  getCountryById,
  getCountries,
  createCountry,
  updateCountry,
  deleteCountry,
};
