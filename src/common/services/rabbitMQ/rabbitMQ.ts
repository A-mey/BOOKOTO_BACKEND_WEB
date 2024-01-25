import amqp from "amqplib";

export class RabbitMQ {
    public connection: amqp.Connection | undefined;
    public channel: amqp.Channel | undefined;

    constructor() {
        (async() => {
            this.createChannel();
        });
    }

    createChannel = async () => {
        this.connection = await amqp.connect("amqp://localhost:5672");
        if (!this.connection) {
            throw new Error("Queue connection error");
        }
        this.channel = await this.connection.createChannel();
        if (!this.channel) {
            throw new Error("Queue connection error");
        }
    };

    createQueue = async (queue: string) => {
        await this.channel?.assertQueue(queue, { durable: false });
    };


}
