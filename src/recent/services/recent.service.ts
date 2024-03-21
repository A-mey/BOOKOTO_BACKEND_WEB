import { catchError } from "../../common/utils/catch.util";
import { UserProduct } from "../../product/types/user.product.type";
import { IRecentDaoInterface } from "../interfaces/IRecent.queue.dao.interface";
import { IRecentServiceInterface } from "../interfaces/IRecent.service.interface";

export class RecentService implements IRecentServiceInterface {
    recentDao: IRecentDaoInterface;
    
    constructor(recentDao: IRecentDaoInterface) {
        this.recentDao = recentDao;
    }

    addProductToRecent = async (userProduct : UserProduct) : Promise<void> => {
        try {
            await this.recentDao.saveToRecentProductsDao(userProduct);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };
}