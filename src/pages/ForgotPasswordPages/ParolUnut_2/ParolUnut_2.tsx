import React, {useCallback, useEffect, useState} from 'react';
import "./ParolUnut_2.css"
import {Formik} from "formik";
import {InputField} from "../../../components/forms/InputField";
import {Routes} from "../../../constants/Routes";
import {useAuthContext} from "../../../api/auth/authContext";
import {useHistory} from "react-router";

const INITIAL_VALUES = {
    code: "",
};


export default function ParolUnut_2() {
    const {authApi} = useAuthContext();
    const history = useHistory();
    const [phone, setPhone] = useState<string | null>("");
    useEffect(() => (
        setPhone(window.localStorage.getItem("phoneUser"))
    ), []);
    const submitHandler = useCallback((value) => {
        authApi.codeVerify({
            query: {
                phone: phone,
                code: value.code
            }
        }).then((res) => {
                localStorage.setItem("code", res.data.code);
                if (res.success === true) {
                    history.replace({pathname: Routes.ForgotPassword3})
                }
            }
        ).catch(error => {
            alert(error)
        })
    }, [authApi, phone, history]);
    return (
        <div className="ParolUnut_2_block _main">
            <Formik onSubmit={(values) => submitHandler(values)} initialValues={INITIAL_VALUES}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className="ParolUnut_2">
                            <p>Parolni tasdiqlang</p>
                            <div className="ParolUnut_1_block_input">
                                <InputField type="number" name="code"/>
                            </div>

                            <div className='ParolUnut_1_tasdiq'>
                                <p onClick={() => history.goBack()}>orqaga</p>
                                <button type="submit">Tasdiqlash</button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>

    );
}