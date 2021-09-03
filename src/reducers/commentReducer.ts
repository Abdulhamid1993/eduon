import { Action } from "redux";
import { DELETE, update } from "immupdate";
import { PersistConfig } from "redux-persist";
import {CommentsProps, UserProps} from "../api/auth/authDTO";
import { AppStoreState } from "../store/RootReducer";
import { createReducer, createRootReducer, PerformAction } from "../utils/ReducerUtils";

export const commentReducerPersistConfig: Partial<PersistConfig<CommentReducerState>> = {
    whitelist: ["comment"],
};

interface SetCommitsMeta {
    readonly comment: CommentsProps;
}

enum ReducerActions {
    SetComments = "Comment/SetComments"
}

export interface CommentReducerState {
    readonly comment?: CommentsProps;
}

function getState(): CommentReducerState {
    return {};
}

export const commentReducer = createRootReducer<CommentReducerState>(
    getState(),

    createReducer([ReducerActions.SetComments], (state, {meta}) => update(state, { comment: meta.comment })),


);

// ==================
// Selectors
// ==================

export const commitsSelector = ({ comment }: AppStoreState): CommentsProps| undefined | any => comment.comment;

// ==================
// Actions
// ==================

export function setCommits(meta: SetCommitsMeta): PerformAction<SetCommitsMeta> {
    return {type: ReducerActions.SetComments, meta}
}