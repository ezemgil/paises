import sequelize from "./db.js";

async function dbInit() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default dbInit;
