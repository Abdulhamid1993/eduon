import React, {useCallback, useEffect, useState} from 'react';
import "./ParolUnut_3.css"
import {useAuthContext} from "../../../api/auth/authContext";
import {Formik} from "formik";
import {useHistory} from "react-router";
import {InputField} from "../../../components/forms/InputField";
import {Routes} from "../../../constants/Routes";

const INITIAL_VALUES = {
    password: "",
};

export default function ParolUnut_3() {
    const [parol, setParol] = useState(true);
    const {authApi} = useAuthContext();
    const history = useHistory();
    const [phone, setPhone] = useState<any>("");
    const [code, setCode] = useState<any>("");
    useEffect(() => {
        setPhone(window.localStorage.getItem("phoneUser"));
        setCode(window.localStorage.getItem("code"))
    }, []);
    const submitHandler = useCallback((value) => {
        authApi.resetPassword({
            data: {
                phone: phone,
                password: value.password,
                code: code
            }
        }).then((res) => {
            if (res.success === true) {
                history.replace({pathname: Routes.AuthPage})
            }
        })
    }, [authApi, phone, code, history]);
    return (
        <div className="ParolUnut_3_block _main">
            <Formik onSubmit={submitHandler} initialValues={INITIAL_VALUES}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className="ParolUnut_3">
                            <p>Yangi parolni kiriting</p>
                            <div className="ParolUnut_1_block_input">
                                <InputField type={parol ? "password" : "text"} name="password"/>
                            </div>
                            <p>Parolni takror kiriting</p>
                            <div className="ParolUnut_1_block_input">
                                <InputField type={parol ? "password" : "text"} name="password1"/>
                            </div>
                            <h5 onClick={() => setParol(prevState => !prevState)}>Parolni ko'rsatish</h5>
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
