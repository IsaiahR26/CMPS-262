const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const pool = process.env.DATABASE_URL

  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: isProduction ? { rejectUnauthorized: false } : false,
    })
  : new Pool({
      user: "postgres",
      host: "localhost",
      database: "module5_api",
      password: "postgres123",
      port: 5432,
    });

module.exports = pool;
