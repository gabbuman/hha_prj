import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../database/index";

export const csRouter = express.Router();
csRouter.use(express.json());

//get all records
csRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const cs = (await collections.casestudy.find({}).toArray());
        res.status(200).send(cs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//get case study schema
csRouter.get("/:schema", async (req: Request, res: Response) => {
    try {
        const cs = (await collections.casestudy.findOne({"title": "Schema"}));

        if (cs) {
            res.status(200).send(cs);
        }
    } catch (error) {
        res.status(404).send(`schema not found`);
    }
});

//insert case study data
csRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newrec = req.body;
        const result = await collections.casestudy.insertOne(newrec);

        result
            ? res.status(201).send(`Successfully in adding record ${result.insertedId}`)
            : res.status(500).send("Failed to add record");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

//delete case study record
csRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.casestudy.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed game with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove game with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Game with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});