import { catchError } from "../../utils/catch.util";
import { KafkaJSClass } from "./config.kakfa";

export class KafkaProducer extends KafkaJSClass {
    public readonly producer = this.kafka.producer();
    topic: string;

    constructor(topic: string) {
        super();
        this.topic = topic;
    }

    connect = async () => {
        try{
            await this.producer.connect();
            console.log("producer connected");
        }
        catch(error: unknown) {
            const errorMsg = await catchError(error);
            console.log(errorMsg.message);
        }
    };

    send = async (message: unknown) => {
        try {
            const data = message as string;
            await this.producer.send({
                topic: this.topic,
                messages: [
                    { value: data },
                ],
            });
        } catch (error: unknown) {
            const errorMsg = await catchError(error);
            console.log(errorMsg.message);
        }
        
    };

    disconnect = async () => {
        await this.producer.disconnect();
    };
}