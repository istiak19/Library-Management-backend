import express, { Request, Response } from 'express';
import { Book } from '../models/book.model';
export const bookRouter = express.Router();

// GET All Books
bookRouter.get("/books", async (req: Request, res: Response) => {
    try {
        const { filter, sortBy = "createdAt", limit = "10" } = req.query;
        const sortDirection = req.query.sort as any === "asc" ? 1 : -1;
        let query: any = {}
        if (filter) {
            query.genre = filter
        }
        const books = await Book.find(query).sort({ [sortBy as string]: sortDirection }).limit(limit as any)
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully!",
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve books",
            error,
        });
    }
});

// POST Book
bookRouter.post("/books", async (req: Request, res: Response) => {
    try {
        const bookInfo = req.body;
        const data = await Book.create(bookInfo);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: data,
        });
    } catch (error: any) {
        if (error.name === "ValidationError") {
            res.status(400).json({
                success: false,
                message: "Validation failed",
                error,
            });
        } else {
            res.status(500).json({
                success: false,
                message: "Something went wrong",
                error,
            });
        }
    }
});