import express from 'express';
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  updatePostHandler,
} from '../controllers/post.controller';
import { validate } from '../middleware/validate';
import {
  createPostSchema,
  deletePostSchema,
  getPostSchema,
  updatePostSchema,
} from '../schemas/post.schema';

const router = express.Router();

router
  .route('/')
  .post(validate(createPostSchema), createPostHandler)
  .get(getPostsHandler);

router
  .route('/:postId')
  .get(validate(getPostSchema), getPostHandler)
  .patch(validate(updatePostSchema), updatePostHandler)
  .delete(validate(deletePostSchema), deletePostHandler);

export default router;