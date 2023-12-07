export abstract class User {

    abstract processSession (): Promise<void>
}