import { Product } from "../types/product.type";

export interface IProductDaoInterface {

    getAllProductsDao (from: number, to: number) : Promise<Product[]>
    getProductDetailsByIdDao (id: string) : Promise<Product>
}