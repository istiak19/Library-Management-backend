import cors from "cors";
import express, { Application, Request, Response } from "express";
import { bookRouter } from "./app/controllers/book.controller";
import { borrowRoute } from "./app/controllers/borrow.controller";

const app: Application = express();

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials: true
}));

app.use("/api", bookRouter);
app.use("/api", borrowRoute);

app.get("/", (req: Request, res: Response) => {
    res.send("Library Management System API is running successfully!");
});

export default app;