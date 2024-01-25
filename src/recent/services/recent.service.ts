import { catchError } from "../../common/utils/catch.util";
import { IRecentDaoInterface } from "../interfaces/IRecent.dao.interface";
import { IRecentServiceInterface } from "../interfaces/IRecent.service.interface";

export class RecentService implements IRecentServiceInterface {
    recentDao: IRecentDaoInterface;
    
    constructor(recentDao: IRecentDaoInterface) {
        this.recentDao = recentDao;
    }

    addProductToRecent = async (id: string) : Promise<void> => {
        try {
            await this.recentDao.saveToRecentProductsDao(id);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        }
    };
}