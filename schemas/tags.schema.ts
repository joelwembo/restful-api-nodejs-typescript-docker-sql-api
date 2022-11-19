import { object, string, TypeOf } from 'zod';

export const createTagSchema = object({
  body: object({
    tag: string({
      required_error: 'tag is required',
    })
  }),
});

const params = {
  params: object({
    postId: string(),
  }),
};

export const getTagSchema = object({
  ...params,
});

export const updateTagSchema = object({
  ...params,
  body: object({
    tag: string(),
  
  }).partial(),
});

export const deleteTagSchema = object({
  ...params,
});

export type CreatePostInput = TypeOf<typeof createTagSchema>['body'];
export type GetPostInput = TypeOf<typeof getTagSchema>['params'];
export type UpdatePostInput = TypeOf<typeof updateTagSchema>;
export type DeletePostInput = TypeOf<typeof deleteTagSchema>['params'];