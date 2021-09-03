// @ts-ignore
import React, {ReactElement, ReactNode, useContext, useMemo} from "react";
import {AppLanguage} from "../i18n/I18nContext";
import {API_HOST} from "../constants/AppConstants";

export interface ApiContextDataProps {
  readonly token?: string;
  readonly language: AppLanguage;
}

export interface ApiContextProps {
  readonly host: string;
  readonly token?: string;
  readonly language: AppLanguage;
}

export interface ApiProviderProps {
  readonly children: ReactNode;
  readonly data?: ApiContextDataProps;
}

function createContentValue(apiData: ApiContextDataProps): ApiContextProps {
  return {
    ...apiData,
    host: API_HOST,
  };
}

export const ApiContext = React.createContext<ApiContextProps>(
  createContentValue({
    language: AppLanguage.Russian,
  }),
);

export function ApiProvider({
  data = {} as ApiContextDataProps,
  ...props
}: ApiProviderProps): ReactElement<object> {
  const value = useMemo(() => createContentValue(data), [data]);

  return <ApiContext.Provider {...props} value={value} />;
}

export function useApiBase(): ApiContextProps {
  return useContext(ApiContext);
}
