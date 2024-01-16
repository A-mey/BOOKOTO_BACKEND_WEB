import { catchError } from "../../common/utils/catch.util";
import { Product } from "../types/product.type"

export class ProductDao {

    constructor () {}

    getAllProductsDao = async (from: number, to: number) : Promise<Product> => {
        try {
            const products = ProductList.splice(from,to);
            return products;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        }
    }
}