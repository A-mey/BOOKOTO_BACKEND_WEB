import { UserProduct } from "../../product/types/user.product.type";

export interface IRecentDaoInterface {
    saveToRecentProductsDao (userProduct : UserProduct) : Promise<void>
}