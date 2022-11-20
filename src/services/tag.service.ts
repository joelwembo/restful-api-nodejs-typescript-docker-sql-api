import { Request } from 'express';
import { Tag } from '../models/tag.entity';
import { AppDataSource } from '../utils/data-source';

const postRepository = AppDataSource.getRepository(Tag);


/**
 * @Author : Joel Otepa Wembo
 * @Description : Service to laverage typeorm repository functions and libs built-in types
 * @Date : 11/20/2022
 */
export const findTags = async (req: Request) => {
  const builder = postRepository.createQueryBuilder('tag');

  if (req.query.search) {
    builder.where('tag.tag LIKE :search OR tag.id LIKE :search', {
      search: `%${req.query.search}%`,
    });
  }

  if (req.query.sort) {
    const sortQuery = req.query.sort === '-price' ? 'DESC' : 'ASC';
    builder.orderBy('post.title', sortQuery);
  }

  return await builder.getMany();
};