import React, {useCallback} from 'react';
import "./ParolUnut_1.css"
import {Formik} from "formik";
import {InputField} from "../../../components/forms/InputField";
import {useAuthContext} from "../../../api/auth/authContext";
import {Routes} from "../../../constants/Routes";
import {useHistory} from "react-router";

const INITIAL_VALUES = {
    phone: "",
};

export default function ParolUnut_1() {
    const {authApi} = useAuthContext();
    const history = useHistory();
    const submitHandler = useCallback((value) => {
        let regexp = /[^a-zа-яё,._\-\/=!?0-9\s]/gi;
        let phoneNumber = value.phone;
        phoneNumber = phoneNumber.replace(/^\s/, '');
        phoneNumber = phoneNumber.replace(/ {2}/, ' ');
        phoneNumber = phoneNumber.replace(regexp, '');
        phoneNumber = phoneNumber.substr(0, 25);
        localStorage.setItem("phoneUser", phoneNumber);
        authApi.loginCredentials({
            query: {
                phone: phoneNumber,
                type: "resset_password"
            }
        }).then((res) => {
            if(res.success === true) {
                history.replace({pathname: Routes.ForgotPassword2})
            } else {
                alert("error")
            }
            }
        )
    }, [authApi, history]);
    return (
        <div className="ParolUnut_1_block _main">
        <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => submitHandler(values)}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                        <div className="ParolUnut_1 ">
                            <h4 style={{marginBottom: "50px"}}>PAROLNI TIKLASH</h4>
                            <div className="ParolUnut_1_block_input">
                                {/*<div className='ParolUnut_1_div1'>*/}
                                {/*    <select>*/}
                                {/*        <option>+998 ( UZ )</option>*/}
                                {/*        <option>+1 ( USA )</option>*/}
                                {/*        <option>+7 ( RUS )</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}
                                <div className='ParolUnut_1_div2 mb-2'>
                                    <InputField inputClassName=""
                                                placeholder="Tel.raqamni kiriting" name="phone"/>
                                </div>
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
