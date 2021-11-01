import express from "express";
import { connectToDatabase } from "./database/index"
import { csRouter } from "./routes/casestudy.router";

const app = express();

connectToDatabase()
    .then(() => {
        app.use("/cs", csRouter);

        app.listen('8080', () => {
            console.log("Server started at http://localhost:8080");
        });
    })
    .catch((error) => {
        console.error("Database connection failed", error);
        process.exit();
    });