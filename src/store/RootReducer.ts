import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AnyAction } from "../utils/ReducerUtils";
import { appReducer, appReducerPersistConfig, AppReducerState } from "../reducers/appReducer";
import {userReducer, userReducerPersistConfig, UserReducerState} from "../reducers/userReducer";
import {authReducer, authReducerPersistConfig, AuthReducerState} from "../reducers/authReducer";
import {commentReducer, commentReducerPersistConfig, CommentReducerState} from "../reducers/commentReducer";

export interface AppStoreState {
    readonly app: AppReducerState;
    readonly user: UserReducerState;
    readonly auth: AuthReducerState;
    readonly comment: CommentReducerState;
}

export const rootReducer = combineReducers<any>({
    app: persistReducer<AppReducerState, AnyAction>(
        {
            ...appReducerPersistConfig,
            key: "app",
            storage,
        },
        appReducer,
    ),
    user: persistReducer<UserReducerState, AnyAction>(
        {
            ...userReducerPersistConfig,
            key: "user",
            storage,
        },
        userReducer,
    ),
    auth: persistReducer<AuthReducerState, AnyAction>(
        {
            ...authReducerPersistConfig,
            key: "auth",
            storage,
        },
        authReducer,
    ),
    comment: persistReducer<CommentReducerState, AnyAction>(
        {
            ...commentReducerPersistConfig,
            key: "comment",
            storage,
        },
        commentReducer,
    ),
});
