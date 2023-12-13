import express from "express";

export interface IStartupControllerInterface {
    manageSession: (req: express.Request, res: express.Response) => Promise<void>
}