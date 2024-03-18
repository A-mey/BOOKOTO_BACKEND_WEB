import { Product } from "../types/product.type";
import { UserProduct } from "../types/user.product.type";

export interface IProductServiceInterface {
    getAllProducts (from: number, to: number) : Promise<Product[]>
    getProductDetailsById (id: string) : Promise<Product>
    saveToRecentProducts (userProduct: UserProduct) : Promise<void>
}