import { Controller } from "@nestjs/common";
import {
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
  Transport,
} from "@nestjs/microservices";
import { MyMessageBrokerTopics } from "./topics";

@Controller()
export class NatsController {
  @MessagePattern("*", Transport.NATS)
  async getTimeUS(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log("dasf");

    console.log(data);
  }
  @EventPattern("*", Transport.NATS)
  async getTimsdfaeUS(@Payload() data: string, @Ctx() context: NatsContext) {
    console.log("dasf");

    console.log(data);
  }
}
