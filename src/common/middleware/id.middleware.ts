import express, { NextFunction } from "express";
import { catchError } from "../utils/catch.util";
import { RequestIdService } from "../services/requestId/requestId.service";
import { IIdMiddleWareInterface } from "../interfaces/IId.middlewar.interface";

export class IdMiddleware implements IIdMiddleWareInterface{
    private requestIdService: RequestIdService;

    constructor() {
        this.requestIdService = new RequestIdService();
    }

    createRequestId = async(req: express.Request, _res: express.Response, next: NextFunction) => {
        try {
            const sessionId = req.header("SESSIONID") || "011011100110010101110111";
            await this.requestIdService.setRequestId(sessionId);
            next();
        } catch(error: unknown) {
            const errorMsg = await catchError(error);
            console.log("IdClass:createRequestId::error", errorMsg);
        }  
    };
}