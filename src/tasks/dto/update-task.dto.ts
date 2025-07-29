import { IsOptional, IsString, IsIn, IsDateString } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsIn(['pending', 'in-progress', 'done'])
  status?: 'pending' | 'in-progress' | 'done';

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
