import { Request } from 'express';
import { Post } from '../models/post.entity';
import { AppDataSource } from '../utils/data-source';

const postRepository = AppDataSource.getRepository(Post);

export const createPost = async (input: Partial<Post>) => {
  return await postRepository.save(postRepository.create({ ...input }));
};

export const getPost = async (postId: string) => {
  return await postRepository.findOneBy({ id: postId });
};

export const findPosts = async (req: Request) => {
  const builder = postRepository.createQueryBuilder('tasks');


  // search by title or description
  if (req.query.search) {
    builder.where('tasks.title LIKE :search OR tasks.description LIKE :search', {
      search: `%${req.query.search}%`,
    });
  }

  if (req.query.sort) {
    const sortQuery = req.query.sort === '-id' ? 'DESC' : 'ASC';
    builder.orderBy('tasks.title', sortQuery);
  }

  return await builder.getMany();
};