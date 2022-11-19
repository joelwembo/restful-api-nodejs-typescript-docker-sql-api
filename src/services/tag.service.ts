import { Request } from 'express';
import { Tag } from '../models/tag.entity';
import { AppDataSource } from '../utils/data-source';

const postRepository = AppDataSource.getRepository(Tag);

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