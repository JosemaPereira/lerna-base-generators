import { defaultConfig } from "./providers/config.provider";
import express from "express";
import { mainRoute } from "./routes";
import { logError, handleError } from "./middlewares";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mainRoute(app);

app.use(logError);
app.use(handleError);
app.listen(defaultConfig.port, () =>
    console.log(`App listen at http://localhost:${defaultConfig.port}`)
);