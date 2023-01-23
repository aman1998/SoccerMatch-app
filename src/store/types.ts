import { ILeaguesState } from '@store/leagues/types';

export interface IApplicationState {
  leagues: ILeaguesState;
}

export declare type IPayloadAction<P = void, T extends string = string, M = never, E = never> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? Record<string, unknown>
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? Record<string, unknown>
    : {
        error: E;
      });
