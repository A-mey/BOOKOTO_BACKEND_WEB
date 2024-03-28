import express from "express";

export interface IRecentControllerInterface {
    addToRecentProductsList (req : express.Request, res : express.Response) : Promise<void>
    getRecentProductsList (req : express.Request, res : express.Response) : Promise<void>
}