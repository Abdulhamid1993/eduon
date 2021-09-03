import { update } from "immupdate";
import { PersistConfig } from "redux-persist";
import {AppLanguage, getDefaultLanguage} from "../i18n/I18nContext";
import {createReducer, createRootReducer, PerformAction} from "../utils/ReducerUtils";
import {AppStoreState} from "../store/RootReducer";


export const appReducerPersistConfig: Partial<PersistConfig<AppReducerState>> = {
    whitelist: ["version", "language"],
};

interface SwitchLanguageMeta {
    readonly language: AppLanguage;
}

enum ReducerActions {
    SwitchLanguage = "App/SwitchLanguage",
}

export interface AppReducerState {
    readonly language: AppLanguage;
}

function getState(): AppReducerState {
    return {
        language: getDefaultLanguage(),
    };
}

export const appReducer = createRootReducer<AppReducerState>(
    getState(),

    createReducer([ReducerActions.SwitchLanguage], (state, { meta }) =>
        update(state, { language: meta.language }),
    ),

);

// ==================
// Selectors
// ==================

export const appLanguageSelector = ({ app }: AppStoreState): AppLanguage => app.language;


// ==================
// Actions
// ==================

export function switchLanguage(meta: SwitchLanguageMeta): PerformAction<SwitchLanguageMeta> {
    return { type: ReducerActions.SwitchLanguage, meta };
}

