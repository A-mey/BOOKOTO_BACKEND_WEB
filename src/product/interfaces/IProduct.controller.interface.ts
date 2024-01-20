import express from "express";

export interface IProductControllerInterface {
    getProducts (req: express.Request, res: express.Response) : Promise<void>
    getProductById (req: express.Request, res: express.Response) : Promise<void>

}