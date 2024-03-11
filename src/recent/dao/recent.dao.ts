import { RabbitMQ } from "../../common/services/rabbitMQ/rabbitMQ";
import { catchError } from "../../common/utils/catch.util";
import { IRecentDaoInterface } from "../interfaces/IRecent.dao.interface";

export class RecentDAO implements IRecentDaoInterface {
    rabbitMQ: RabbitMQ;

    constructor () {
        this.rabbitMQ = new RabbitMQ("recent");
    }

    saveToRecentProductsDao = async (id: string) : Promise<void> => {
        try {
            await this.rabbitMQ.send(id);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };
}