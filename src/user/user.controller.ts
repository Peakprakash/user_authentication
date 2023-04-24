import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private prisma: PrismaService,
    private userservice: UserService,
  ) {}

  @Post()
  createuser() {
    return this.userservice.createUser();
  }

  @Get()
  getuser() {}

  @Patch()
  updatepatch() {}

  @Delete()
  removeuser() {}
}
