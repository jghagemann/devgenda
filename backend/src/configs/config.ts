export const databaseConfig = () => ({
  database: {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["src/migrations/**/*.js"],
    synchronize: true,
    cli: {
      migrationsDir: "src/migrations"
    }
  }
})