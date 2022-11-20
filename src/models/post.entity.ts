import { Column, Entity} from 'typeorm';
import Model from './model.entity';

/**
 * @Author : Joel Otepa Wembo
 * @Description : Tasks Model to define Tables and columns
 * @Date : 11/20/2022
 */

@Entity('tasks')
export class Post extends Model {

  @Column({
    unique: true,
  })
  title: string;

  @Column()
  description: string;

  @Column({
    default: 'in-progress',
  })
  task_status: string;

  // @Column({
  //   default: 'management',
  // })
  // username: string;

  @Column({
    default: 'Personal',
     type: 'json'
  })
  tags: string;

  
  @Column({
    default: 'Primary Subtask',
     type: 'json'
  })
  subTasks: string;
}


