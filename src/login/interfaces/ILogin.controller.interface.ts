import express from "express";

export interface ILoginController {
    sendOTP (req: express.Request, res: express.Request) : Promise<void>
    validateOTP (req: express.Request, res: express.Request) : Promise<void>
    createUser (req: express.Request, res: express.Request) : Promise<void>
    returnUserData (req: express.Request, res: express.Request) : Promise<void>

}