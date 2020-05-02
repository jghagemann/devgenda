// Update with your config settings.
const path = require("path");
const BASE_PATH = path.join(__dirname, "src", "db");

module.exports = {

  test: {
    client: "pg",
    connection: "postgres://user:password@localhost:5432/devgenda_test",
    migrations: {
      directory: path.join(BASE_PATH, "migrations")
    },
    useNullAsDefault: true
  },

  development: {
    client: "pg",
    connection: "postgres://user:passwordh@localhost:5432/devgenda",
    migrations: {
      directory: path.join(BASE_PATH, "migrations")
    },
    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user:     "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user:     "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
