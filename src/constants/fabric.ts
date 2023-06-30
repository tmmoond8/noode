export const OBJECT_TYPE = {
  Rect: 'Rect',
  Circle: 'Circle',
  Triangle: 'Triangle',
} as const;

export type ObjectType = keyof typeof OBJECT_TYPE;
