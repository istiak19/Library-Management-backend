import { Model } from "mongoose"

export interface IBook {
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description?: string,
    copies: number
    available: boolean
};

export interface booksMethods extends Model<IBook> {
    borrowQuantity(quantity: number): void
}

export type BookModel = Model<IBook, {}, booksMethods>;