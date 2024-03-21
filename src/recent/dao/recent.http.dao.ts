import { NullException } from "../../common/error/exceptions/null.exception.error";
import logFactoryService from "../../common/services/logger/log.factory.service";
import { LogService } from "../../common/services/logger/log.service";
import { catchError } from "../../common/utils/catch.util";
import { IRecentHttpDaoInterface } from "../interfaces/IRecent.http.dao.interface";
import HttpRequestService from "../../common/services/http/http.services";

export class RecentHttpDao implements IRecentHttpDaoInterface {
    logger: LogService;

    constructor () { 
        this.logger = new LogService("LoginController");
    }

    getRecentProductsDao = async (id : string) : Promise<Response> => {
        const headers = {ID: id};
        const logger = await logFactoryService.getLog(this.logger, "getRecentProductsDao");
        try {
            const url: string = process.env.getOtpUrl!;
            if (!url) {
                throw new NullException();
            }
            const getOtpData = await HttpRequestService.getRequest(url, headers) as Response;
            return getOtpData;
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            logger.error("error", errorMsg);
            throw new Error(errorMsg.message);
        } 
    };
}