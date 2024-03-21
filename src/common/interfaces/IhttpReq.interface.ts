export interface IHttpReq {
    getRequest: (url: string, headers: object) => Promise<unknown>;
    postRequest: (url: string, headers: object, data: object) => Promise<unknown>;
}