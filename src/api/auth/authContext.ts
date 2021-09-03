import {useCallback, useMemo} from "react";
import {useApiBase} from "../ApiContext";
import {AuthApi} from "./AuthApi";
import {useDispatch} from "react-redux";
import {clearUser} from "../../reducers/userReducer";
import {resetToken} from "../../reducers/authReducer";
import {useHistory} from "react-router";


interface Props {
    readonly authApi: AuthApi;
    readonly logout: () => void;

}

export function useAuthContext(): Props {
    const data = useApiBase();
    const dispatch = useDispatch();
    const history = useHistory();
    const api = useMemo(() => new AuthApi(data), [data]);

    const logoutHandler = useCallback(() => {
        dispatch(clearUser());
        dispatch(resetToken());
        history.replace("/")
    }, [dispatch, history]);

    return {
        authApi: api,

        logout: logoutHandler
    };
}
