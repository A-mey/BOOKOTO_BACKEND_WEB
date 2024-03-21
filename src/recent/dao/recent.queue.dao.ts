import { RabbitMQ } from "../../common/services/rabbitMQ/rabbitMQ";
import { catchError } from "../../common/utils/catch.util";
import { UserProduct } from "../../product/types/user.product.type";
import { IRecentQueueDaoInterface } from "../interfaces/IRecent.queue.dao.interface";

export class RecentQueueDao implements IRecentQueueDaoInterface {
    rabbitMQ: RabbitMQ;

    constructor () {
        this.rabbitMQ = new RabbitMQ("recent");
    }

    saveToRecentProductsDao = async (userProduct : UserProduct) : Promise<void> => {
        try {
            await this.rabbitMQ.send(userProduct);
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            throw new Error(errorMsg.message);
        }
    };
}