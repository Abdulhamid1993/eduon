import React, {useCallback, useEffect, useState} from "react";
import "../../components/css/SignUpPage3.css";
import {Link, useHistory} from "react-router-dom";
import {Formik} from "formik";
import {InputField} from "../../components/forms/InputField";
import {Routes} from "../../constants/Routes";
import {useAuthContext} from "../../api/auth/authContext";
import axios from "axios";

const INITIAL_VALUES = {
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: ""
};

interface Props {
    readonly switchUser: boolean;
}

export default function SignUpPage3({switchUser}: Props) {
    const {authApi} = useAuthContext();
    const history = useHistory();
    const [phone, setPhone] = useState<string | any>("");
    const [code, setCode] = useState<string | any>("");
    const [check, setCheck] = useState<any>("");
    const [gender, setGernder] = useState("");
    const [userName, setUserName] = useState<any>("");
    useEffect(() => {
        setPhone(switchUser ? window.localStorage.getItem("phoneUser") : window.localStorage.getItem("phoneSpeaker"));
        setCode(window.localStorage.getItem("code"));
        setUserName(window.localStorage.getItem("Username"));
    }, [switchUser]);
    const submitHandler = useCallback((value) => {
            authApi.fullRegister({
                data: {
                    first_name: value.first_name,
                    last_name: value.last_name,
                    password: value.password,
                    gender: gender,
                    phone: phone,
                    code: code,
                    ref_code: null
                }
            }).then((res) => {
                    if (res.success === true) {
                        history.replace({pathname: Routes.AuthPage})
                    }
                }
            ).catch(error => {
                alert(error)
            })
    }, [authApi, history, phone, code, gender]);
    const submitHandlerSpeaker = useCallback((value) => {
        let form = new FormData();
        form.append('phone_number', phone );
        form.append('first_name', value.first_name );
        form.append('last_name', value.last_name, );
        form.append('password1', value.password );
        form.append('password2', value.confirmPassword );
        form.append('gender', gender );
        form.append('code', code );
        console.log(form, "foremdata")
            axios.post("http://edubackend.backoffice.uz/reg-full", form).then((res) => {
                if (res.data.success === true) {
                    history.replace({pathname: Routes.AuthPage})
                }
            }
        ).catch(error => {
            alert(error)
        })
    }, [history, phone, code, gender]);
    console.log(userName, "e")
    return (
        <>
            <section className="sectionSignUpPage3">
                <div className="container">
                    <Formik onSubmit={(values) => {switchUser ? submitHandler(values) : submitHandlerSpeaker(values)}} initialValues={INITIAL_VALUES}>
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="mainSignUpPage3">
                                    <div className="signUpPage-input-item3">
                                        <InputField
                                            inputClassName="signUpPage-inner-item3"
                                            placeholder="Ismingiz"
                                            editable={true}
                                            type="text"
                                            name="first_name"
                                        />
                                        <InputField
                                            inputClassName="signUpPage-inner-item3"
                                            placeholder="Familiyangiz"
                                            type="text"
                                            name="last_name"
                                        />
                                        <InputField
                                            inputClassName="signUpPage-inner-item3"
                                            placeholder="Parol"
                                            type="password"
                                            name="password"
                                        />
                                        <InputField
                                            inputClassName="signUpPage-inner-item3"
                                            placeholder="Parolni tasdiqlang"
                                            type="password"
                                            name="confirmPassword"
                                        />

                                        <label className='SignUpPage3_label'>
                                            Erkak
                                            <input name='radio' type="radio" value="Erkak" id="radio" onChange={(e) => setGernder(e.target.value)}/>
                                        </label>

                                        <label className='SignUpPage3_label'>
                                            Ayol
                                            <input name='radio' type="radio" value="Ayol" id="radio" onChange={(e) => setGernder(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className="signUpPage-text-link-chak">
                                        <Link to={Routes.Conditions}>Foydalanish shartlari </Link>
                                        <label>
                                            <p className="signUpPage-text-p">bilan tanishdim</p>
                                        </label>
                                        <div className="checkbox">
                                            <label className="custom-checkbox" >
                                                <input type="checkbox" name="color-1" value="indigo" onChange={(e) => setCheck(e.target.value)}/>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="singUpPage-inner-btn-item3">
                                        <button className="signUpPage-btn-inner3" type="submit">
                                            Davom etish
                                        </button>
                                        <p className="signUpPage-text-item3">
                                            Akkauntingiz bormi? unda <Link to={Routes.AuthPage}>bu yerga</Link> bosing
                                        </p>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    );
}