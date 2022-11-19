import express from 'express';
import { getTasksHandler } from '../controllers/tag.controller';
import { validate } from '../middleware/validate';
// import {
//     GetPostInput,
// } from '../schemas/tags.schema';

const router = express.Router();
router
  .route('/')
  .get(getTasksHandler);

export default router;