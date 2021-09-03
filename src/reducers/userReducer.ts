import { Action } from "redux";
import { DELETE, update } from "immupdate";
import { PersistConfig } from "redux-persist";
import {UserProps} from "../api/auth/authDTO";
import { AppStoreState } from "../store/RootReducer";
import { createReducer, createRootReducer, PerformAction } from "../utils/ReducerUtils";

export const userReducerPersistConfig: Partial<PersistConfig<UserReducerState>> = {
  whitelist: ["user"],
};

interface SetUserMeta {
  readonly user: UserProps;
}

enum ReducerActions {
  SetUser = "User/SetUser",

  ClearUser = "User/ClearUser",
}

export interface UserReducerState {
  readonly user?: UserProps;
}

function getState(): UserReducerState {
  return {};
}

export const userReducer = createRootReducer<UserReducerState>(
  getState(),

  createReducer([ReducerActions.SetUser], (state, { meta }) => update(state, { user: meta.user })),

  createReducer([ReducerActions.ClearUser], (state) => update(state, { user: DELETE })),

);

// ==================
// Selectors
// ==================

export const userSelector = ({ user }: AppStoreState): UserProps | undefined | any => user.user;

export const userIdSelector = ({user}: AppStoreState) : string | undefined => user.user?.id;

export const userPhoneSelector = ({ user }: AppStoreState): string | undefined =>
  user.user?.phone;

export const userFirstNameSelector = ({ user }: AppStoreState): string | undefined => user.user?.first_name;

export const userLastNameSelector = ({ user }: AppStoreState): string | undefined => user.user?.last_name;

// ==================
// Actions
// ==================

export function setUser(meta: SetUserMeta): PerformAction<SetUserMeta> {
  return { type: ReducerActions.SetUser, meta };
}

export function clearUser(): Action {
  return { type: ReducerActions.ClearUser };
}