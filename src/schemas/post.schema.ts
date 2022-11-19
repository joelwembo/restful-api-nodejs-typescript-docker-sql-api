import { object, string, TypeOf } from 'zod';

export const createPostSchema = object({
  body: object({
    title: string({
      required_error: 'title here',
    }),
    description: string({
      required_error: 'description is required',
    }),
    task_status: string({
      required_error: 'task_statu is required',
    }),
    tags: string(),
    username: string(),
    list1: string(),
  }),
});

const params = {
  params: object({
    postId: string(),
  }),
};

export const getPostSchema = object({
  ...params,
});

export const updatePostSchema = object({
  ...params,
  body: object({
    title: string(),
    description: string(),
    task_status: string(),
    tags: string(),
    username: string(),
    list1: string()
  }).partial(),
});

export const deletePostSchema = object({
  ...params,
});

export type CreatePostInput = TypeOf<typeof createPostSchema>['body'];
export type GetPostInput = TypeOf<typeof getPostSchema>['params'];
export type UpdatePostInput = TypeOf<typeof updatePostSchema>;
export type DeletePostInput = TypeOf<typeof deletePostSchema>['params'];