import app from "./app.js";
import DBConfig from "./Config.js";

import { config } from "dotenv";
config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await DBConfig();
  console.log("APP is runnign");
});
