export {};

declare global {
  type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
  type Nullable<T> = T | null;
  type Size = {
    width: number;
    height: number;
  };
}
