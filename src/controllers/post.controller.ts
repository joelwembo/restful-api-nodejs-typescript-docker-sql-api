import { NextFunction, Request, Response } from 'express';
import {
  CreatePostInput,
  DeletePostInput,
  GetPostInput,
  UpdatePostInput,
} from '../schemas/post.schema';
import { createPost, findPosts, getPost } from '../services/post.service';
import AppError from '../utils/appError';

export const createPostHandler = async (
  req: Request<{}, {}, CreatePostInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    // const user = await findUserById(res.locals.user.id as string);
   
    const task = await createPost(req.body);

    res.status(201).json({
      task,
      status: 'success',
    });
  } catch (err: any) {
    if (err.code === '23505') {
      return res.status(409).json({
        status: 'fail',
        message: 'Post with that title already exist',
      });
    }
    next(err);
  }
};

export const getPostHandler = async (
  req: Request<GetPostInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await getPost(req.params.postId);

    if (!tasks) {
      return next(new AppError(404, 'Task with that ID not found'));
    }

    res.status(200).json({
      status: 'success',
      tasks,
      
    });
  } catch (err: any) {
    next(err);
  }
};

// displaying all the tasks
export const getPostsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await findPosts(req);

    // res.status(200).json({
    //   status: 'success',
    //   results: tasks.length,
    //   tasks,
      
    // });
    res.send(tasks)
    
  } catch (err: any) {
    next(err);
  }
};

export const updatePostHandler = async (
  req: Request<UpdatePostInput['params'], {}, UpdatePostInput['body']>,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await getPost(req.params.postId);

    if (!post) {
      return next(new AppError(404, 'Taks with that ID not found'));
    }

    Object.assign(post, req.body);

    const updatedPost = await post.save();

    res.status(200).json({
      status: 'success',
      data: {
        post: updatedPost,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const deletePostHandler = async (
  req: Request<DeletePostInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await getPost(req.params.postId);

    if (!post) {
      return next(new AppError(404, 'Post with that ID not found'));
    }

    await post.remove();

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};