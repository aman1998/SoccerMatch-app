export type TNullable<T> = T | null;

export type TRequestHandler<T> = {
  fetching: boolean;
  data: T[];
  error: unknown;
};

export type TPageProps<T> = Promise<{
  props: T;
}>;
