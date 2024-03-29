import { catchError } from "../../common/utils/catch.util";
import { IRecentServiceInterface } from "../../recent/interfaces/IRecent.service.interface";
import { IProductDaoInterface } from "../interfaces/IProduct.dao.interface";
import { IProductServiceInterface } from "../interfaces/IProduct.service.interface";
import { Product } from "../types/product.type";
import { UserProduct } from "../types/user.product.type";

export class ProductService implements IProductServiceInterface {
    productDao: IProductDaoInterface;
    recentService: IRecentServiceInterface;
    
    constructor (productDao: IProductDaoInterface, recentService: IRecentServiceInterface) {
        this.productDao = productDao;
        this.recentService = recentService;
    }

    getAllProducts = async (from: number, to: number) : Promise<Product[]> => {
        try {
            const products = await this.productDao.getAllProductsDao(from, to);
            return products;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };

    getProductDetailsById = async (id: string) : Promise<Product> => {
        try {
            const productDetails = await this.productDao.getProductDetailsByIdDao(id);
            return productDetails;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };

    saveToRecentProducts = async (userProduct: UserProduct) : Promise<void> => {
        try {
            // const saveRecent = { USER_ID: userId, PRODUCT_ID: productId };
            await this.recentService.addProductToRecent(userProduct);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };
}