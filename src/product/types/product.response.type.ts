import { Product } from "./product.type";

export type ProductResponse = {
    kind: string;
    totalItems: number,
    items: Product[];
}