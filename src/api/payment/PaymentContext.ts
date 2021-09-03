import { useMemo } from "react";
import {useApiBase} from "../ApiContext";
import { PaymentApi } from "./PaymentApi";

interface Props {
    readonly paymentApi: PaymentApi;
}

export function usePaymentContext(): Props {
    const data = useApiBase();

    const api = useMemo(() => new PaymentApi(data), [data]);

    return {
        paymentApi: api,
    };
}
