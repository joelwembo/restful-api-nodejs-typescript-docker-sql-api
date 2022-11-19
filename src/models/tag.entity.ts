import { Column, Entity} from 'typeorm';
import Model from './model.entity';

@Entity('tagList')
export class Tag extends Model {

  @Column({
    unique: true,
  })
  tag: string;

}
