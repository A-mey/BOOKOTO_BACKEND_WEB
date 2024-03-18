import { UserProduct } from "../../product/types/user.product.type";

export interface IRecentServiceInterface {
    addProductToRecent (userProduct : UserProduct) : Promise<void>
}