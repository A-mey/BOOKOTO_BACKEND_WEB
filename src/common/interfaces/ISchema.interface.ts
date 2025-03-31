export interface ISchemaInterface {
    getSchema(): Map<string, object>;
}

export type ISchemaInterfaceConstructor = {
    new (schema: string): ISchemaInterface;
    getSchema(): Map<string, object>;
};