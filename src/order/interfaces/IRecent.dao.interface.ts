export interface IRecentDaoInterface {
    saveToRecentProductsDao (id: string) : Promise<void>
}