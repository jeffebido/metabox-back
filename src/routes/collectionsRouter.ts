import { Router } from 'express';

import { createCollection } from '../controllers/collectionsController';

import { collectionsMiddleware } from '../middlewares/collectionsMiddleware';
import { checkAuthenticatedUserMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.use(checkAuthenticatedUserMiddleware);

router.post("/newCollection", collectionsMiddleware, createCollection);


export default router;