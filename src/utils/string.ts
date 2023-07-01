import { nanoid } from 'nanoid';

export const generateUUID = (prefix: string = '') => prefix + nanoid();
export const parseFloat = (number: string | number) => {
  if (typeof number === 'string') {
    return Number.parseFloat(number);
  }
  return number;
};
