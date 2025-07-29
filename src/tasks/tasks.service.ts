import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepo: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    try {
      return await this.taskRepo.find();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch tasks');
    }
  }

  async findOne(id: number): Promise<Task> {
    try {
      const task = await this.taskRepo.findOneBy({ id });
      if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
      return task;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to fetch task');
    }
  }

  async create(dto: CreateTaskDto): Promise<Task> {
    try {
      const task = this.taskRepo.create(dto);
      return await this.taskRepo.save(task);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create task');
    }
  }

  async update(id: number, dto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    try {
      Object.assign(task, dto);
      return await this.taskRepo.save(task);
    } catch (error) {
      throw new InternalServerErrorException('Failed to update task');
    }
  }


  async remove(id: number): Promise<void> {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    try {
      await this.taskRepo.remove(task);
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete task');
    }
  }
}
