import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser() {
    const user = await this.prisma.user.create({
      data: {
        name: 'Prakas',
        email: 'prakashkbasnet01@getMaxListeners.com',
        password: 'pokhara',
      },
    });
    console.log(user);
    return user;
  }
}
