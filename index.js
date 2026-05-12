import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./src/db/dbConnection.js";
import dns from "dns"

dotenv.config({
  path: "./env",
});

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
])

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server runing on port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("server error", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
