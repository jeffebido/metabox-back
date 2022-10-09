import { Router } from 'express';

import { createModel } from '../controllers/modelsController';

import { modelsMiddleware } from '../middlewares/modelsMiddleware';
import { checkAuthenticatedUserMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.use(checkAuthenticatedUserMiddleware);

router.post("/newModel", modelsMiddleware, createModel);


export default router;