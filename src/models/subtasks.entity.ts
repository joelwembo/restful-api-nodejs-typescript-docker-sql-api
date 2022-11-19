import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import Model from './model.entity';


@Entity('subtaks')
export class Post extends Model {


  @Column()
  subTaskTitle: string;

  @Column({
    default: 'true',
  })
  status: string;

  @Column({
    default: 'joelwembo',
  })
  username: string;

}