import express, { NextFunction } from "express";

export interface IIdMiddleWareInterface {
    createRequestId (req: express.Request, _res: express.Response, next: NextFunction) : Promise<void>
}