import appTypes, { LoadingActionTypes } from './app/actionTypes';
import usersTypes, { UserActionTypes } from './user/actionTypes';

const appActionTypes = {
  ...appTypes,
  ...usersTypes,
} as const;

export type AppActionTypes =
  | LoadingActionTypes
  | UserActionTypes;

export default appActionTypes;
