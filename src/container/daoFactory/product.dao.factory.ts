import { ProductDao } from "../../product/dao/product.dao";
import { IProductDaoInterface } from "../../product/interfaces/IProduct.dao.interface";
import { ProductMockDao } from "../../product/dao/product.mock.dao";

export class ProductDaoFactory {
    constructor() {}

    getDao = () : IProductDaoInterface => {
        let productDao: IProductDaoInterface;
        console.log("process.env.DEPLOY_STAGE", process.env.DEPLOY_STAGE);
        if (process.env.DEPLOY_STAGE === "qc") {
            productDao = new ProductMockDao();
        } else {
            productDao = new ProductDao();
        }
        return productDao;
    };
}