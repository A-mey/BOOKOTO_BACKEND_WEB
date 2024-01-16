import { catchError } from "../../common/utils/catch.util";
import { ISessionServiceInterface } from "../../login/interfaces/ISession.service.interface";
import { IProductServiceInterface } from "../../product/interfaces/IProduct.service.interface";
import { Product } from "../../product/types/product.type";
import { IStartupServices } from "../interfaces/Istartup.services.interface";
import { User } from "../models/data/user.data.models";
import { UserFactory } from "../models/factories/user.factory.models";

export class StartupService implements IStartupServices {
    
    sessionService: ISessionServiceInterface;
    productService: IProductServiceInterface;

    constructor(sessionService: ISessionServiceInterface, productService: IProductServiceInterface) {
        this.sessionService = sessionService;
        this.productService = productService;
    }

    getUser = async (sessionId: string) => {
        try {
            return await new UserFactory(sessionId).getUser();
        } catch (error) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        }
    };

    processSession = async (user: User) : Promise<{ SESSION_ID?: string; DATA?: object; }>=> {
        return user.processSession();
    };

    createSession = async () => {
        try {
            return await this.sessionService.createSession();
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        }
    };

    getUserdata = async () => {
        try {
            // TODO
            return true;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg);
        } 
    };

    getAllProducts = async (from: number, to: number) : Promise<Product[]> => {
        let products: Product[] = [];
        try {
            products = await this.productService.getAllProducts(from, to);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            console.log(errorMsg); 
        }
        return products;
    };
}