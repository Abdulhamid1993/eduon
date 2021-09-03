import React, {useMemo} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {RootContainer} from "./RootContainer";
import {Provider} from "react-redux";
import {configureStore} from "../store/configureStore";
import {PersistGate} from "redux-persist/integration/react";
import {ProviderContainer} from "./ProviderContainer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function AppContainer() {
    const store = useMemo(() => configureStore(), []);

    if (!store) {
        return null;
    }

    return (
        <Provider store={store.store}>
            <PersistGate persistor={store.persistor}>
                <ProviderContainer>
                    <BrowserRouter>
                        <>
                            <Route component={RootContainer}/>
                            <ToastContainer/>
                        </>
                    </BrowserRouter>
                </ProviderContainer>
            </PersistGate>
        </Provider>
    );
}
