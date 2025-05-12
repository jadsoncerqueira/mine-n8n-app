import "dotenv/config";

const knexConfig = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
    application_name: "apollo",
  },
};

export default knexConfig;
