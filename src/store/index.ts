import { Models, init, RematchDispatch, RematchRootState } from '@rematch/core';
import { count } from './count';

export interface RootModel extends Models<RootModel> {
  count: typeof count;
}

const models: RootModel = { count };

export const store = init({
  models,
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
