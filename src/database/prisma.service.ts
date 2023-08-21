import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
    
    async enableShutdownHooks(app: INestApplication) {
        // TODO: This doesn't work yet, but it should.
        // this.$on("beforeExit", async () => {
        //     await app.close();
        // });
    }
}
