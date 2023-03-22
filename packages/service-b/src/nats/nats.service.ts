import { Injectable } from "@nestjs/common";
import {
  ClientNats,
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
} from "@nestjs/microservices";
import { NatsServiceBase } from "./base/nats.service.base";
import { MyMessageBrokerTopics } from "./topics";

@Injectable()
export class NatsService extends NatsServiceBase {}
