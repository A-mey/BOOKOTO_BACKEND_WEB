import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
// import path from "path";

export default class GrpcService<T> {
    private client: T;

    constructor(protoPath: string, packageName: string, serviceName: string, address: string) {
        try {
            const packageDefinition = protoLoader.loadSync(protoPath);
            const grpcObject = grpc.loadPackageDefinition(packageDefinition) as Record<string, unknown>;
            console.log("Loaded gRPC Services:", Object.keys(grpcObject), grpcObject);
            if (!grpcObject[packageName]) {
                throw new Error(`Service ${packageName} not found in proto file.`);
            }
    
            const newPackage = grpcObject[packageName] as Record<string, unknown>;
    
            this.client = new (newPackage[serviceName] as { new (...args: unknown[]): T })(
                address,
                grpc.credentials.createInsecure()
            );
        } catch (error) {
            console.log("error", error);
            process.exit(1);
        }
        
    }

    getClient(): T {
        return this.client;
    }
}