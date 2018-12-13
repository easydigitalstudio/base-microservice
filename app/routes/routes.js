import express from 'express';
import { logger } from '@easydigitalstudio/express-server';

const router = express.Router();

router.use((req, res, next) => {
  logger.info({
    method: req.method,
    time: new Date().toISOString(),
  });
  next();
});

router.get('/', (req, res) => res.status(200).json('Hello World!'));

export default router;
