import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { NatsServiceBase } from "./base/nats.service.base";
import { MyMessageBrokerTopics } from "./topics";

@Injectable()
export class NatsService extends NatsServiceBase {
  @Cron("* * * * * *")
  async handleCron() {
    console.log(new Date().getTime());
    await this.natsClient.emit("dsaf", "test");
  }
}
