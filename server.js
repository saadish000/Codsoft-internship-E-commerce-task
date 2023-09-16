const app = require("./app.js");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js");
const PORT = 4000;

process.on("uncaughtException", (err) => {
  console.log(`error : ${err.message}`);
  console.log("shutting down the server due to uncaught exception..");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const server = app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`error : ${err.message}`);
  console.log("shutting down the server due to unhandled promise rejection..");
  server.close(() => {
    process.exit(1);
  });
});
