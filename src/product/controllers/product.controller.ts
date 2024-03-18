import { catchError } from "../../common/utils/catch.util";
import { IProductControllerInterface } from "../interfaces/IProduct.controller.interface";
import { IProductServiceInterface } from "../interfaces/IProduct.service.interface";
import responseTemplates from "../../common/constants/response.template.constants";
import express from "express";

export class ProductController implements IProductControllerInterface {
    productService: IProductServiceInterface;

    constructor(productService: IProductServiceInterface) {
        this.productService = productService;
    }

    getProducts = async (req: express.Request, res: express.Response) => {
        try {
            const productList = await this.productService.getAllProducts(req.body.from, req.body.to);
            res.status(200).json({success: false, code: 200, data: {message: "Products fetched", data: productList}});
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            console.log(errorMsg.message);
            const response = responseTemplates.DEFAULT_ERROR;
            res.status(response.code).json(response);
        }
    };

    getProductById = async (req: express.Request, res: express.Response) => {
        try {
            const productDetails = await this.productService.getProductDetailsById(req.params.productId);
            res.status(200).json({success: false, code: 200, data: {message: "Product fetched", data: productDetails}});
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            console.log(errorMsg.message);
            const response = responseTemplates.DEFAULT_ERROR;
            res.status(response.code).json(response);
        }
    };
}