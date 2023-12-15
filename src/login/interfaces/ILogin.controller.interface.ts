import express from "express";

export interface ILoginControllerInterface {
    createOTP (req: express.Request, res: express.Response) : Promise<void>
    validateOTP (req: express.Request, res: express.Response) : Promise<void>
}