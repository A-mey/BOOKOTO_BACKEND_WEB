export interface IHttpReq {
    getRequest: (url: string) => Promise<unknown>;
    postRequest: (url: string, data: object) => Promise<unknown>;
}