import { useMemo } from "react";
import {useApiBase} from "../ApiContext";
import {CommentApi} from "./CommentApi";



interface Props {
    readonly commentApi: CommentApi;
}

export function useCommentContext(): Props {
    const data = useApiBase();

    const api = useMemo(() => new CommentApi(data), [data]);

    return {
        commentApi: api,
    };
}
