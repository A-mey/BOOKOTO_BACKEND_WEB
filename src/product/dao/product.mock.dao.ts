import httpServices from "../../common/services/http/http.services";
import { Product } from "../types/product.type";
import { NullException } from "../../common/error/exceptions/null.exception.error";
import { catchError } from "../../common/utils/catch.util";
import { IProductDaoInterface } from "../interfaces/IProduct.dao.interface";
import { ProductResponse } from "../types/product.response.type";

export class ProductMockDao implements IProductDaoInterface {

    constructor () {}

    getAllProductsDao = async (from: number, to: number) : Promise<Product[]> => {
        try {
            let url = process.env.GOOGLE_BOOKS_API_URL;
            if (!url) {
                throw new NullException();
            }
            const key = process.env.GOOGLE_BOOKS_KEY;
            if (!key) {
                throw new NullException();
            }
            url = url.replace("${START_INDEX}", from.toString()).replace("${END_INDEX}", to.toString()).replace("${KEY}", key);
            console.log("url", url);
            const productsResponse = await httpServices.getRequest(url) as ProductResponse;
            const products = productsResponse.items;
            console.log("products", products);
            return products;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        }
    };
}