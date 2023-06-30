import { nanoid } from 'nanoid';

export const generateUUID = (prefix: string = '') => prefix + nanoid();
