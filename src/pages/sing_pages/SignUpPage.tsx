import React, {Dispatch, SetStateAction, useCallback, useState} from "react";
import {Link} from 'react-router-dom'
import {useHistory} from "react-router";
import '../../components/css/SignUpPage.css'
import {useAuthContext} from "../../api/auth/authContext";
import {InputField} from "../../components/forms/InputField";
import {Formik} from "formik";
import {Routes} from "../../constants/Routes";
import Loader from "../../components/loader/Loader";
import axios from "axios";


const INITIAL_VALUES = {
    phone: "",
};

interface Props {
    readonly switchUser: boolean;
    readonly setSwitchUser: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpPage({setSwitchUser, switchUser}: Props) {
    const {authApi} = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [speaker, setSpeaker] = useState(true);
    const [error, setError] = useState("");
    const history = useHistory();
    const submitHandler = useCallback((value) => {
        setLoading(true);
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
                type: "registeration"
            }
        }).then((res) => {
                if (res.message === "Code yuborildi!") {
                    setLoading(false);
                    history.replace({pathname: Routes.SignUp2})
                } else if (res.success === false) {
                    setLoading(false);
                    setError("Bunday foydalanuvchi avval ro'yxatdan o'tgan! Iltimos tekshirib qaytadan kiriting yoki kirish orqali kiring.")
                }
            }
        ).catch(error => {
            alert(error)
        })
    }, [authApi, history]);
    console.log(error, "re")
    const submitHandlerSpeaker = useCallback((value) => {
        setLoading(true);
        let regexp = /[^a-zа-яё,._\-\/=!?0-9\s]/gi;
        let phoneNumber = value.phone;
        phoneNumber = phoneNumber.replace(/^\s/, '');
        phoneNumber = phoneNumber.replace(/ {2}/, ' ');
        phoneNumber = phoneNumber.replace(regexp, '');
        phoneNumber = phoneNumber.substr(0, 25);
        let form = new FormData();
        form.append('phone_number', phoneNumber );
        localStorage.setItem("phoneSpeaker", phoneNumber);
        axios.post("http://edubackend.backoffice.uz/send_code", form)
            .then(res => {
                if(res.data.status === true) {
                    setLoading(false);
                    history.replace({pathname: Routes.SignUp2})
            } else if(res.data.status === false){
                    setLoading(false);
                    setError("Bunday foydalanuvchi avval ro'yxatdan o'tgan! Iltimos tekshirib qaytadan kiriting yoki kirish orqali kiring.")
                }
            //     console.log(res, "res")
            }
        )
    }, [history]);
    console.log(switchUser, "swit");
    return (
        <>
            <section className="sectionSignUpPage">
                <div className="container">
                    <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => {switchUser ? submitHandler(values) : submitHandlerSpeaker(values)}}>
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="mainSignUpPage">

                                    <div className="signUpPage-inner">
                                        {switchUser ? (
                                            <div className="signin-courses_sec_btn ">
                                                <h2 className="course_btn_active bilim-oluvchi">Bilim oluvchi </h2>
                                                <h3 className="course_btn_active blim-ulashuvchi">O'quvchi</h3>
                                                <button onClick={() => setSwitchUser(prevState => !prevState)}
                                                        className="course_btn_1" type="button">
                                                    <div></div>
                                                </button>
                                                <h2 className="course_btn_pass bilim-oluvchi">Bilim ulashuvchi</h2>
                                                <h3 className="course_btn_pass blim-ulashuvchi">O'qituvchi</h3>
                                            </div>
                                        ) : (
                                            <div className="signin-courses_sec_btn">
                                                <h2 className="course_btn_pass bilim-oluvchi">Bilim oluvchi </h2>
                                                <h3 className="course_btn_pass blim-ulashuvchi">O'quvchi</h3>
                                                <button onClick={() => setSwitchUser(prevState => !prevState)}
                                                        className="course_btn_2" type="button">
                                                    <div></div>
                                                </button>
                                                <h2 className="course_btn_active bilim-oluvchi">Bilim ulashuvchi</h2>
                                                <h3 className="course_btn_active blim-ulashuvchi">O'qituvchi</h3>
                                            </div>
                                        )}
                                    </div>
                                    <div className="signUpPage-input-item">
                                        <InputField inputClassName="signUpPage-inner-item"
                                                    placeholder="Tel.raqamni kiriting" name="phone"/>
                                        {error && <div className="error-text">
                                            {error}
                                        </div>}
                                        <button className="signUpPage-btn-inner" type="submit">{loading ?
                                            <div className="block-loading">
                                                <p className="mt-2">Iltimos kuting...</p>
                                            </div> : error ? <span>Qaytadan kiritish</span> : <span>Davom etish</span>}</button>
                                        <p className="signUpPage-text-item">Akkauntingiz bormi? unda <Link
                                            to={Routes.LoginPage}>bu yerga</Link> bosing</p>
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