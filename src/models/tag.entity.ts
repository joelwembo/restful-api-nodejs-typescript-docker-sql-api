import { Column, Entity} from 'typeorm';
import Model from './model.entity';

/**
 * @Author : Joel Otepa Wembo
 * @Description : taglist Model to define Our Tables and columns
 * @Date : 11/20/2022
 */

@Entity('tagList')
export class Tag extends Model {

  @Column({
    unique: true,
  })
  tag: string;

}
