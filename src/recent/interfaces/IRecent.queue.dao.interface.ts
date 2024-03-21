import { UserProduct } from "../../product/types/user.product.type";

export interface IRecentQueueDaoInterface {
    saveToRecentProductsDao (userProduct : UserProduct) : Promise<void>
}