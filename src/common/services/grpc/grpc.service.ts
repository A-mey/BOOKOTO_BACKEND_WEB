import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

export default class GrpcService<T> {
    private client: T;

    constructor(protoPath: string, serviceName: string, address: string) {
        const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, protoPath));
        const grpcObject = grpc.loadPackageDefinition(packageDefinition) as Record<string, unknown>;

        if (!grpcObject[serviceName]) {
            throw new Error(`Service ${serviceName} not found in proto file.`);
        }

        this.client = new (grpcObject[serviceName] as { new (...args: unknown[]): T })(
            address,
            grpc.credentials.createInsecure()
        );
    }

    getClient(): T {
        return this.client;
    }
}