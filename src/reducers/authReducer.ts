import { Action } from "redux";
import { DELETE, update } from "immupdate";
import { PersistConfig } from "redux-persist";

import { AppStoreState } from "../store/RootReducer";
import { createReducer, createRootReducer, PerformAction } from "../utils/ReducerUtils";

export const authReducerPersistConfig: Partial<PersistConfig<AuthReducerState>> = {
  whitelist: [
    "token",
    "authDate",
  ],
};

interface SetTokenMeta {
  readonly token: string;
}

interface SetAuthDateMeta {
  readonly authDate: number;
}

interface SetAuthDateExpiredMeta {
  readonly state: boolean;
}


enum ReducerActions {
  SetToken = "Auth/SetToken",
  ResetToken = "Auth/ResetToken",
  SetAuthDate = "Auth/SetAuthDate",
  SetAuthDateExpired = "Auth/SetAuthDateExpired",
}

export interface AuthReducerState {
  readonly token?: string;
  readonly authDate?: number;
  readonly authDateExpired: boolean;
}

function getState(): AuthReducerState {
  return {
    authDateExpired: false,
  };
}

export const authReducer = createRootReducer<AuthReducerState>(
  getState(),

  createReducer([ReducerActions.SetToken], (state, { meta }) =>
    update(state, { token: meta.token, authDate: Date.now() }),
  ),

  createReducer([ReducerActions.ResetToken], (state) =>
    update(state, { token: DELETE, authDate: DELETE }),
  ),

  createReducer([ReducerActions.SetAuthDate], (state, { meta }) =>
    update(state, { authDate: meta.authDate }),
  ),

  createReducer([ReducerActions.SetAuthDateExpired], (state, { meta }) =>
    update(state, { authDateExpired: meta.state }),
  ),


);

// ==================
// Selectors
// ==================

export function tokenSelector(state: AppStoreState): string | undefined {
  return state.auth.token;
}

export function authDateSelector(state: AppStoreState): number | undefined {
  return state.auth.authDate;
}

export const authDateExpiredSelector = ({ auth }: AppStoreState): boolean => auth.authDateExpired;

// ==================
// Actions
// ==================

export function setToken(meta: SetTokenMeta): PerformAction<SetTokenMeta> {
  return { meta, type: ReducerActions.SetToken };
}

export function resetToken(): Action {
  return { type: ReducerActions.ResetToken };
}

export function setAuthDate(meta: SetAuthDateMeta): PerformAction<SetAuthDateMeta> {
  return { meta, type: ReducerActions.SetAuthDate };
}

export function setAuthDateExpired(
  meta: SetAuthDateExpiredMeta,
): PerformAction<SetAuthDateExpiredMeta> {
  return { meta, type: ReducerActions.SetAuthDateExpired };
}
