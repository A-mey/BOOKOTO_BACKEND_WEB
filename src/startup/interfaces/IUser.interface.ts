export interface IUserInterface {
    processSession (): Promise<{SESSION_ID: string; data: object;} | {SESSION_ID: string}>
}