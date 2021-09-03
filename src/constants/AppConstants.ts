import { AppLanguage } from "../i18n/I18nContext";

export const IS_DEV = process.env.NODE_ENV !== "production";

export const API_HOST = process.env.REACT_APP_API_URL as string;

export const DEFAULT_LANGUAGE = process.env.REACT_APP_DEFAULT_LANGUAGE as AppLanguage;

export const Base_Url = "api-web";