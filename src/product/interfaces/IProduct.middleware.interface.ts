import express, { NextFunction } from "express";

export interface IProductMiddlewareInterface {
    sendProductToRecent (req: express.Request, res: express.Response, next: NextFunction) : Promise<void>
}