import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
let server: Server;

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Connection to MongoDB!")
        server = app.listen(port, () => {
            console.log(`Library Management app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
};

main();