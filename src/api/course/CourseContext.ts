import { useMemo } from "react";
import {useApiBase} from "../ApiContext";
import {CourseApi} from "./CourseApi";


interface Props {
    readonly courseApi: CourseApi;
}

export function useCourseContext(): Props {
    const data = useApiBase();

    const api = useMemo(() => new CourseApi(data), [data]);

    return {
        courseApi: api,
    };
}
