import { Router } from 'express';
import multer from "multer";

import { createModel, uploadModel, getModelsByCollection, getModelById } from '../controllers/modelsController';

import { modelsMiddleware } from '../middlewares/modelsMiddleware';
import { checkAuthenticatedUserMiddleware } from '../middlewares/authMiddleware';
import { uploadModels } from "../middlewares/uploads/modelUploadsMiddleware";


const router = Router();

router.use(checkAuthenticatedUserMiddleware);

router.post("/newModel", modelsMiddleware, createModel);
router.post("/uploadModel", multer(uploadModels.getConfig).single("model"), uploadModel );

router.get('/models/:collectionId', getModelsByCollection);
router.get('/model/:id', getModelById);

export default router;