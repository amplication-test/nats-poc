import { Inject } from "@nestjs/common";
import {
  ClientNats,
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
} from "@nestjs/microservices";
import { MyMessageBrokerTopics } from "../topics";
export class NatsServiceBase {
  constructor(@Inject("NATS_CLIENT") private natsClient: ClientNats) {}

  async onModuleInit() {
    await this.natsClient.connect();
    console.log("fdsa");
  }
}
