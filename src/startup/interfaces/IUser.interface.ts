export interface IUserInterface {
    processSession (): Promise<{SESSION_ID?: string; DATA?: object;}>
}