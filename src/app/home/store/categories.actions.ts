import { Action } from '@ngrx/store';
const comp = '[Category] ';
export const FETCH_CATEGORY = comp + 'Category  Fetch';
export const SET_CATEGORY = comp + 'Category  Set';
export const FETCH_CATEGORY_ERROR = comp + 'Category  Error';

export interface Category {
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
  id: string;
}
export class FetchCategory implements Action {
  readonly type = FETCH_CATEGORY;
}

export class SetCategories implements Action {
  readonly type = SET_CATEGORY;

  constructor(public payload: Category[]) {}
}

export class FetchCategoryError implements Action {
  readonly type = FETCH_CATEGORY_ERROR;
  constructor(public payload: string) {}
}

export type CategoryActions =
  | FetchCategory
  | FetchCategoryError
  | SetCategories;
