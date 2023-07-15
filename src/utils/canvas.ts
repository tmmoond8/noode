import { fabric } from 'fabric';

export const compareObject = (a: fabric.Object, b: fabric.Object) => {
  const diffInVariantFields = (obj1: fabric.Object, obj2: fabric.Object) => {
    const diffInFields = Object.entries(obj2).filter(
      ([field, obj2Value]) => obj1[field as keyof typeof obj1] !== obj2Value,
    );
    return diffInFields;
  };
  return diffInVariantFields.length > 0;
};
