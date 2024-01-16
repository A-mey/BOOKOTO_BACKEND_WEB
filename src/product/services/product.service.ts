import { ProductDao } from '../dao/product.dao';
import { Product } from '../types/product.type';

export class ProductService {
    productDao: ProductDao;
    
    constructor (productDao: ProductDao) {
        this.productDao = productDao;
    }

    getAllProducts = async (from: number, to: number) : Promise<Product> => {
        try {
            const products = await this.productDao.getAllProductsDao(from, to);
            return products;
        } catch (error: unknown) {

        }
    }
}