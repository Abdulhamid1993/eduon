import React, {Dispatch, SetStateAction, useCallback, useState} from "react";
import "../../components/css/LoginPage.css";
import {Link, useHistory} from "react-router-dom";
import Hide from "../../components/icons/Hide.svg";
import View from "../../components/icons/View.svg";
import {Routes} from "../../constants/Routes";
import {Formik} from "formik";
import {InputField} from "../../components/forms/InputField";
import {useAuthContext} from "../../api/auth/authContext";
import {useDispatch} from "react-redux";
import {setUser} from "../../reducers/userReducer";
import {setToken} from "../../reducers/authReducer";
import {useI18n} from "../../i18n/I18nContext";
import axios from "axios";

const INITIAL_VALUES = {
    phone: "",
    password: ""
};

interface Props {
    readonly switchUser: boolean;
    readonly setSwitchUser: Dispatch<SetStateAction<boolean>>;
}

export default function LoginPage({setSwitchUser, switchUser}: Props) {
    const [type, setType] = useState(true);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const {authApi} = useAuthContext();
    const history = useHistory();
    const dispatch = useDispatch();
    const submitHandlerSpeaker = useCallback((value) => {
        setLoading(true);
        let phoneNumber = value.phone;
        phoneNumber = phoneNumber.length === 9 ? "998" + phoneNumber : phoneNumber.includes("+") ? phoneNumber.replace("+", "") : phoneNumber;
        phoneNumber = phoneNumber.substr(0, 25);
        const form = new FormData();
        form.append("phone", phoneNumber);
        form.append("password", value.password);
        axios.post("http://edubackend.backoffice.uz/login", form)
            .then((res) => {
                if (res.data.success === true) {
                    setLoading(false);
                    let user = res?.data.data?.speaker.speaker;
                    let token = res?.data.data?.token?.access;
                    dispatch(setUser({user}));
                    dispatch(setToken({token}));
                    if (user.id !== null) {
                        // history.replace({pathname: Routes.MainPage})
                        window.location.assign("http://eduonnn.algorithmgateway.uz")
                    }
                } else {
                    setLoading(false);
                    setError(res.data.error)
                }}
        )
    }, [history, dispatch]);
    const submitHandler = useCallback((value) => {
        setLoading(true);
        let phoneNumber = value.phone;
        phoneNumber = phoneNumber.length === 9 ? "998" + phoneNumber : phoneNumber.includes("+") ? phoneNumber.replace("+", "") : phoneNumber;
        phoneNumber = phoneNumber.substr(0, 25);
        authApi.login({
            data: {
                phone: phoneNumber,
                password: value.password
            }
        }).then((res) => {
            if (res.success === true) {
                setLoading(false);
                let user = res?.data?.student;
                let token = res?.data?.token?.access;
                dispatch(setUser({user}));
                dispatch(setToken({token}));
                if (user.id !== null) {
                    history.replace({pathname: Routes.MainPage});
                    localStorage.setItem("phoneUser", phoneNumber)
                }
            } else {
                setLoading(false);
                setError(res.error)
            }}
        )
    }, [authApi, history, dispatch]);
    return (
        <>
            <section className="sectionLoginPage">
                <div className="container">
                    <Formik onSubmit={(values) => {switchUser ? submitHandler(values) : submitHandlerSpeaker(values)}} initialValues={INITIAL_VALUES}>
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="mainLoginPage">
                                    <div className="LoginPage-inner">
                                        {switchUser ? (
                                            <div className="login-courses_sec_btn ">
                                                <h2 className="course_btn_active">Bilim oluvchi</h2>
                                                <h3 className="course_btn_active Bilim-oluvchi">O'quvchi</h3>
                                                <a href="http://eduonnn.algorithmgateway.uz/login" onClick={() => setSwitchUser(prev => !prev)}
                                                        className="course_btn_1" type="button">
                                                    <div></div>
                                                </a>
                                                <h2 className="course_btn_pass">Bilim ulashuvchi</h2>
                                                <h3 className="course_btn_pass Bilim-oluvchi">O'qituvchi</h3>
                                            </div>
                                        ) : (
                                            <div className="login-courses_sec_btn">
                                                <h2 className="course_btn_pass">Bilim oluvchi </h2>
                                                <h3 className="course_btn_pass Bilim-oluvchi">O'quvchi</h3>
                                                <button onClick={() => setSwitchUser(prev => !prev)}
                                                        className="course_btn_2" type="button">
                                                    <div></div>
                                                </button>
                                                <h2 className="course_btn_active">Bilim ulashuvchi</h2>
                                                <h3 className="course_btn_active Bilim-oluvchi">O'qituvchi</h3>
                                            </div>
                                        )}
                                    </div>

                                    <div className="loginPage-input-item">
                                        <InputField
                                            inputClassName="loginPage-inner-item"
                                            type="text"
                                            placeholder="Tel.raqam"
                                            name="phone"
                                        />
                                        {type ? (
                                            <InputField
                                                inputClassName="loginPage-inner-item"
                                                type="password"
                                                placeholder="Parol"
                                                name="password"
                                            />
                                        ) : (

                                            <InputField
                                                className="loginPage-inner-item"
                                                type="text"
                                                placeholder="Parol"
                                                name="password"
                                            />
                                        )}
                                        {type ? (
                                            <label>
                                                <button className="loginPage-inner-icon"
                                                        onClick={() => setType(prev => !prev)} type="button">
                                                    <img src={Hide} alt=""/>
                                                </button>
                                            </label>
                                        ) : (

                                            <label>
                                                <button className="loginPage-inner-icon"
                                                        onClick={() => setType(prev => !prev)} type="button">
                                                    <img src={View} alt=""/>
                                                </button>
                                            </label>
                                        )}
                                        {error && <div className="error-text" >
                                            {error}
                                        </div>}
                                        <Link to={Routes.ForgotPassword1}>
                                            <p className="loginPage-text-item">
                                                Parolingizni unutdingizmi?
                                            </p>
                                        </Link>
                                        <button className="loginPage-btn-inner" type="submit">
                                            {loading ? <div className="block-loading">
                                                <p className="">Iltimos kuting...</p>
                                            </div> : <span>Tizimga kirish</span>}
                                        </button>
                                        <p className="loginPage-inner-text-item">
                                            Akkauntingiz yo’qmi? unda
                                            <Link to={Routes.SignUp1}>ro’yxatdan o’ting</Link>
                                        </p>
                                    </div>

                                    <div className="loginPage-btn-item"></div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    );
}

