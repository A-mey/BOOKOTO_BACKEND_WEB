import express, {NextFunction} from "express";
import { IProductServiceInterface } from "../interfaces/IProduct.service.interface";
import { IProductMiddlewareInterface } from "../interfaces/IProduct.middleware.interface";
import { UserProduct } from "../types/user.product.type";

export class ProductMiddleware implements IProductMiddlewareInterface {
    productService: IProductServiceInterface;
    constructor(productService: IProductServiceInterface) {
        this.productService = productService;
    }

    sendProductToRecent = async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {
            const productId: string = req.params.productId;
            const userId: string = req.headers["id"]! as string;
            const userProduct: UserProduct = { userId: userId, productId: productId };
            await this.productService.saveToRecentProducts(userProduct);
            next();
        } catch (error: unknown) {
            next();
        }
    };
}