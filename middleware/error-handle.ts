import { NextFunction, Request, Response } from "express";

export function catchAll(error: Error, req: Request, next: NextFunction, res: Response) {
    console.error(`Error: ${error.message}, ${error.name}`);
    res.status(500).send('error')
}