import { Sequelize } from "sequelize";


const sequelize = new Sequelize("exassessment", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: "3307",
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
