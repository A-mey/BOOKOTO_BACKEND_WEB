import express, { NextFunction, Request } from "express";
import LoginSchema from "../../login/schema/login.schema";
// import validateSchemaServices from "../../common/services/validateSchema.services";
import ValidateSchema from "../services/schema/validate.schema"
import compileSchema from "../services/schema/compile.schema";
import { CommonSchemaValidator } from "../interfaces/schemaValidation.interface";
import { response } from '../types/response.types';
import { errorMessageObject } from '../types/errorMsgObject.types';

export class BodyValidationMiddleware implements CommonSchemaValidator{

    private schema: any;

    constructor(schema: any) {
        this.schema = schema;
    }
    
    checkSchema = async (req: Request, res: express.Response, next: NextFunction) => {
        const origin: (keyof typeof LoginSchema.schema) = req.originalUrl.replace("/", "") as (keyof typeof LoginSchema.schema);
        const schema = LoginSchema.schema[origin];
        const validateSchemaFn = await compileSchema.compile(schema)
        const errorRes: errorMessageObject =  await ValidateSchema.validateSchema(req.body, validateSchemaFn);
        if (errorRes.isValid) {
            next();
        } else {
            const response: response = {success: false, code: 400, data: {message: errorRes.errorMsg}}
            res.status(400).json(response);
        }
    }
}