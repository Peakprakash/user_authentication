import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async createtodo() {
    const todo = await this.prisma.todo.create({
      data: { tittle: 'learn nestjs' },
    });
    console.log(todo);
    return todo;
  }
}
