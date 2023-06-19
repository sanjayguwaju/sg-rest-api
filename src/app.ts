import express, { Request, Response } from "express";
import config from "config";
import logger from "./utils/logger";
import connect from "./utils/connect";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();


const port = config.get<number>("port");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  await connect();
  routes(app);
});