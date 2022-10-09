import { collections } from '@prisma/client';

export type CreateCollectionData = Omit<collections, 'id' | "createdAt" >;
