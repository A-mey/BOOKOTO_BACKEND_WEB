import { IRecentControllerInterface } from "../interfaces/Irecent.controller.interface";
import responseTemplates from "../../common/constants/response.template.constants";
import { IRecentServiceInterface } from "../interfaces/IRecent.service.interface";
import express from "express";

export class RecentController implements IRecentControllerInterface {
    recentService: IRecentServiceInterface;

    constructor (recentService : IRecentServiceInterface) {
        this.recentService = recentService;
    }

    addToRecentProductsList = async (req : express.Request, res : express.Response) => {
        try {
            await this.recentService.addProductToRecent;
            res.json({});
        } catch (error: unknown) {
            const response = responseTemplates.DEFAULT_ERROR;
            res.status(response.code).json(response);
        }
    };

    getRecentProductsList = async (req : express.Request, res : express.Response) => {
        try {
            const recentProductsList = await this.recentService.getRecentProducts;
            res.json({});
        } catch (error: unknown) {
            const response = responseTemplates.DEFAULT_ERROR;
            res.status(response.code).json(response);
        }
    };
}