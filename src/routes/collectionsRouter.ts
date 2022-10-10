import { Router } from 'express';

import { createCollection, getCollectionsByUser, getCollectionBySlug} from '../controllers/collectionsController';

import { collectionsMiddleware } from '../middlewares/collectionsMiddleware';
import { checkAuthenticatedUserMiddleware } from '../middlewares/authMiddleware';

const router = Router();



router.post("/newCollection", checkAuthenticatedUserMiddleware, collectionsMiddleware, createCollection);

router.get('/collections/:userId', getCollectionsByUser);
router.get('/collection/:slug', getCollectionBySlug);



export default router;
