import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Post } from '@nestjs/common/decorators';

@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}
  @Post()
  createtodo() {
    return this.TodoService.createtodo();
  }
}
