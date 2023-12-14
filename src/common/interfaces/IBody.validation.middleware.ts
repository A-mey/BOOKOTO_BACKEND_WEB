import express, { NextFunction } from "express";

export interface IBodyValidationMiddlewareInterface {
    checkSchema (req: express.Request, res: express.Response, next: NextFunction) : Promise<void> 
}