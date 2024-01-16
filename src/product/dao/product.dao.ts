import { NullException } from "../../common/error/exceptions/null.exception.error";
import httpServices from "../../common/services/http/http.services";
import { catchError } from "../../common/utils/catch.util";
import { IProductDaoInterface } from "../interfaces/IProduct.dao.interface";
import { Product } from "../types/product.type";

export class ProductDao implements IProductDaoInterface{

    constructor () {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAllProductsDao = async (from: number, to: number) : Promise<Product[]> => {
        try {
            const url = process.env.PRODUCT_URL;
            if (!url) {
                throw new NullException();
            }
            const products = await httpServices.getRequest(url) as Product[];
            return products;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        }
    };
}