import { Injectable, NotFoundException } from '@nestjs/common';
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

  findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  findOne(id: number): Promise<Task | null> {
    return this.taskRepo.findOneBy({ id });
  }

  async create(dto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepo.create(dto);
    return this.taskRepo.save(task);
  }

  async update(id: number, dto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('Task not found');

    Object.assign(task, dto);
    return this.taskRepo.save(task);
  }

  async remove(id: number): Promise<void> {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('Task not found');

    await this.taskRepo.remove(task);
  }
}
