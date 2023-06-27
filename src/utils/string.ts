import { nanoid } from 'nanoid';

export const uuid = (prefix: string = '') => prefix + nanoid();
