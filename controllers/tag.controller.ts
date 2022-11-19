import { NextFunction, Request, Response } from 'express';
import { findTags } from '../services/tag.service';


// displaying all the tags
export const getTasksHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await findTags(req);

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



