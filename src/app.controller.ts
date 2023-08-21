import { Body, Controller, Post } from '@nestjs/common';
// import { randomUUID } from 'node:crypto';
// import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { MembersRepository } from './repositories/members-repository';

@Controller('app')
export class AppController {
  constructor(
    private membersRepository: MembersRepository,
    // private prisma: PrismaService
  ) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.membersRepository.create(name, memberFunction);

    // const member = await this.prisma.teamMember.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     function: memberFunction,
    //   }
    // })

    // return { member };
  }
}
