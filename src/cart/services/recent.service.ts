import { catchError } from "../../common/utils/catch.util";
import { IRecentDaoInterface } from "../interfaces/ICart.dao.interface";
import { IRecentServiceInterface } from "../interfaces/ICart.service.interface";

export class CartService implements IRecentServiceInterface {
    recentDao: IRecentDaoInterface;
    
    constructor(recentDao: IRecentDaoInterface) {
        this.recentDao = recentDao;
    }

    addProductToRecent = async (id: string) : Promise<void> => {
        try {
            await this.recentDao.saveToRecentProductsDao(id);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };
}