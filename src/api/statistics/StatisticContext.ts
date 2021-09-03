import { useMemo } from "react";
import {useApiBase} from "../ApiContext";
import {StatisticApi} from "./StatisticApi";


interface Props {
    readonly statisticApi: StatisticApi;
}

export function useStatisticContext(): Props {
    const data = useApiBase();

    const api = useMemo(() => new StatisticApi(data), [data]);

    return {
        statisticApi: api,
    };
}