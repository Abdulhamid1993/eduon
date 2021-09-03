import {SWRConfig} from "swr";
import React, {ReactNode} from "react";

import {ApiProvider} from "../api/ApiContext";
import {I18nProvider} from "../i18n/I18nContext";
import {useShallowEqualSelector} from "../hooks/useShallowSelector";
import {appLanguageSelector} from "../reducers/appReducer";
import {tokenSelector} from "../reducers/authReducer";

interface Props {
  readonly children: ReactNode;
}

export function ProviderContainer({ children }: Props) {
  const language = useShallowEqualSelector(appLanguageSelector);
  const token = useShallowEqualSelector(tokenSelector);

    return (
    <I18nProvider data={{ language }}>
      <ApiProvider data={{ token, language }}>
            <SWRConfig value={{ revalidateOnFocus: false }}>{children}</SWRConfig>
      </ApiProvider>
    </I18nProvider>
  );
}
