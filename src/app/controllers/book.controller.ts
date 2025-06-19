import express, { Request, Response } from 'express';
import { Book } from '../models/book.model';
export const bookRouter = express.Router();

bookRouter.get("/book", async (req: Request, res: Response) => {
    const book = await Book.find();
    res.status(200).json({ success: true, message: "Books retrieved successfully!", book: book})
})