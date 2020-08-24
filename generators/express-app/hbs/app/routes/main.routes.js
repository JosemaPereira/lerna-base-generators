import express from "express";
import { MainController } from "../controllers";
export const mainRoute = (app) => {
    const router = express.Router();
    app.use("/", router);
    router.get("/", MainController.get);
};