export interface IRecentHttpDaoInterface {
    getRecentProductsDao (id : string) : Promise<Response>
}