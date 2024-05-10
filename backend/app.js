const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
const VERSION = "v1";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/countries.db",
  logging: false,
});

async function init() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

// Models
const Countries = sequelize.define(
  "countries",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    iso3: {
      type: DataTypes.TEXT(3),
      allowNull: false,
      unique: true,
    },
    iso2: {
      type: DataTypes.TEXT(2),
      allowNull: false,
      unique: true,
    },
    currency: {
      type: DataTypes.TEXT(3),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.REAL,
      allowNull: false,
    },
  },
  { timestamps: false }
);

// Routes
// Find by name
app.get(`/api/${VERSION}/countries/search`, async (req, res) => {
  try {
    const country = await Countries.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `${req.query.name}%`,
        },
      },
    });
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Find by id
app.get(`/api/${VERSION}/countries/:id`, async (req, res) => {
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
});

// Find all
app.get(`/api/${VERSION}/countries`, async (req, res) => {
  try {
    const countries = await Countries.findAll();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create
app.post(`/api/${VERSION}/countries`, async (req, res) => {
  try {
    const country = await Countries.create(req.body);
    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
app.put(`/api/${VERSION}/countries/:id`, async (req, res) => {
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
});

// Delete
app.delete(`/api/${VERSION}/countries/:id`, async (req, res) => {
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
});

// Start the server
init().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
});
