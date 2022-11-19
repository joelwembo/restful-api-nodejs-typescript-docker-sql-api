import { Column, Entity} from 'typeorm';
import Model from './model.entity';

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

  @Column({
    default: 'management',
  })
  username: string;

  @Column({
    default: 'Personal',
  })
  tags: string;

  @Column()
  list1: string;

  @Column()
  list2: string;

  @Column()
  list3: string;
  user: any;
}


