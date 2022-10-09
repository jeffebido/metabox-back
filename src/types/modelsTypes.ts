import { models } from '@prisma/client';

export type CreateModelsData = Omit<models, 'id' | "createdAt" >;
