import { model, Schema } from "mongoose";
import { IBook } from "../interface/book.interface";

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        trim: true
    },
    genre: {
        type: String,
        enum: {
            values: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
            message: '{VALUE} is not supported'
        },
        required: [true, "Genre is required"],
        trim: true,
        uppercase: true
    },
    isbn: {
        type: String,
        unique: true,
        required: [true, "ISBN is required"]
    },
    description: String,
    copies: {
        type: Number,
        required: [true, 'Total number of copies is required, got {VALUE}'],
        min: [0, 'Copies cannot be negative']
    },
    available: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export const Book = model<IBook>("Book", bookSchema);