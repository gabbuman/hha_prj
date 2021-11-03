import * as mongoDB from "mongodb";

const user = "admin";
const userPassword = "pword";
const cluster = "hhadb.tm3pa";
const dbName = "HHA"

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;

export async function connectToDatabase () {
    
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(url);
    await client.connect();
    const db: mongoDB.Db = client.db(dbName);
    console.log(`connect to database: ${dbName}`);

    return db
}