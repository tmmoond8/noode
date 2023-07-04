export {};

declare global {
  type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
  type Nullable<T> = T | null;
  type Unit = 'px' | 'mm' | 'cm' | 'in';
  type Bounds = {
    width: number;
    height: number;
    unit: Unit;
  };
  type Updater<T> = T | ((prev: T) => T);
}
