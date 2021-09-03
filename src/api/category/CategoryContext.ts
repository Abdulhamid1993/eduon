import { useMemo } from "react";
import {useApiBase} from "../ApiContext";
import {CategoryApi} from "./CategoryApi";


interface Props {
    readonly categoryApi: CategoryApi;
}

export function useCategoryContext(): Props {
    const data = useApiBase();

    const api = useMemo(() => new CategoryApi(data), [data]);

    return {
        categoryApi: api,
    };
}
