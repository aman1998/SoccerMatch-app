import { ICardProps } from '@components/Card/types';

export type TNullable<T> = T | null;

export type TRequestHandler<T> = {
  fetching: boolean;
  data: TNullable<T>;
  error: unknown;
};

export type TCardStaticProps = Promise<{
  props: { data: ICardProps[] };
}>;
