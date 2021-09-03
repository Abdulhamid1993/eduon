import { useMemo } from "react";
import {useApiBase} from "../ApiContext";
import {SpeakerApi} from "./SpeakerApi";


interface Props {
    readonly speakerApi: SpeakerApi;
}

export function useSpeakerContext(): Props {
    const data = useApiBase();

    const api = useMemo(() => new SpeakerApi(data), [data]);

    return {
        speakerApi: api,
    };
}
