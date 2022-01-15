import { Express, Router } from 'express';
import { router as userRouter } from './user';

export function connectApi(app: Express) {
  const router = Router();
  router.use('/user', userRouter);
  return app.use('/api', router);
}
