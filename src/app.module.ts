import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [UserModule, ProfileModule, TodoModule, PrismaModule],
})
export class AppModule {}
