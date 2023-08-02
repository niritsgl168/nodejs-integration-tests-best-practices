const isCI = require('is-ci');

module.exports = {
  username: "myuser",
  password: "myuserpassword",
  database: "shop",
  host: isCI ? "postgres" : "localhost",
  port: isCI ? 5432 : 54310,
  logging: false,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
