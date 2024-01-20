import { Product } from "../types/product.type";

export interface IProductServiceInterface {
    getAllProducts(from: number, to: number) : Promise<Product[]>
    getProductDetailsById(id: string) : Promise<Product>
}