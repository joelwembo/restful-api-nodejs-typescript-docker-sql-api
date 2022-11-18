import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import Model from './model.entity';


@Entity('subtaks')
export class Post extends Model {


  @Column()
  subTaskTitle: string;

  @Column({
    default: 'in-progress',
  })
  status: string;

  @Column({
    default: 'management',
  })
  username: string;

}