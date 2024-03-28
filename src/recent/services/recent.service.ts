import { catchError } from "../../common/utils/catch.util";
import { UserProduct } from "../../product/types/user.product.type";
import { IRecentQueueDaoInterface } from "../interfaces/IRecent.queue.dao.interface";
import { IRecentHttpDaoInterface } from "../interfaces/IRecent.http.dao.interface";
import { IRecentServiceInterface } from "../interfaces/IRecent.service.interface";

export class RecentService implements IRecentServiceInterface {
    recentQueueDao: IRecentQueueDaoInterface;
    recentHttpDao: IRecentHttpDaoInterface;
    
    constructor(recentQueueDao: IRecentQueueDaoInterface, recentHttpDao: IRecentHttpDaoInterface) {
        this.recentQueueDao = recentQueueDao;
        this.recentHttpDao = recentHttpDao;
    }

    addProductToRecent = async (userProduct : UserProduct) : Promise<void> => {
        try {
            await this.recentQueueDao.saveToRecentProductsDao(userProduct);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };

    getRecentProducts = async (id : string) : Promise<void> => {
        try {
            await this.recentHttpDao.getRecentProductsDao(id);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };
}