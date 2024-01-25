import express, {NextFunction} from "express";
import { IProductServiceInterface } from "../interfaces/IProduct.service.interface";
import { IProductMiddlewareInterface } from "../interfaces/IProduct.middleware.interface";

export class ProductMiddleware implements IProductMiddlewareInterface {
    productService: IProductServiceInterface;
    constructor(productService: IProductServiceInterface) {
        this.productService = productService;
    }

    sendProductToRecent = async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {
            const productId: string = req.headers["id"]! as string;
            await this.productService.saveToRecentProducts(productId);
            next();
        } catch (error: unknown) {
            next();
        }
    };
}