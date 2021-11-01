import App from './components/App';
import express from "express";
import { connectToDatabase } from "./database/index"
import { csRouter } from "./routes/casestudy.router";

connectToDatabase()
    .then(() => {
        App.use("/cs", csRouter);

        App.listen('8080', () => {
            console.log("Server started at http://localhost:8080");
        });
    })
    .catch((error) => {
        console.error("Database connection failed", error);
        process.exit();
    });