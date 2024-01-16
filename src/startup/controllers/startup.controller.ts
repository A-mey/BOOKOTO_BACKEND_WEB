import express from "express";
import responseTemplateConstants from "../../common/constants/response.template.constants";
import { IStartupControllerInterface } from "../interfaces/IStartup.controllers.interface";
import { IStartupServices } from "../interfaces/Istartup.services.interface";

export class StartupController implements IStartupControllerInterface {
    startupService: IStartupServices;
    
    constructor(startupService: IStartupServices) {
        this.startupService = startupService;
    }

    manageSession = async (req: express.Request, res: express.Response) => {
        try {
            console.log("request");
            const cookie = req.headers.cookie || "";
            console.log("sessionId", cookie);
            if (cookie !== undefined) {
                const sessionId = cookie.substring(11, cookie.length);
                console.log("sessionId", sessionId);
                const user = await this.startupService.getUser(sessionId);
                const sessionDetails = await this.startupService.processSession(user);
                if (user.constructor.name === "NewUser") {
                    res.cookie("SESSION_ID", sessionDetails.SESSION_ID, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: false });
                }
                const productList = await this.startupService.getAllProducts(0, 10);
                res.status(200).json({code: 200, success: true, data: { message: "Session data fetched", data: { SESSION_DATA: sessionDetails.DATA || {}, PRODUCTS: productList}}});
            } else {
                const response = responseTemplateConstants.DEFAULT_ERROR;
                res.status(response.code).json(response);
            }
        } catch (error : unknown) {
            const response = responseTemplateConstants.DEFAULT_ERROR;
            res.status(response.code).json(response);
        }
    };
}