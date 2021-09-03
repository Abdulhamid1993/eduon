import React, {useCallback, useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "../../components/css/SignUpPage2.css";
import {useAuthContext} from "../../api/auth/authContext";
import {Routes} from "../../constants/Routes";
import {Formik} from "formik";
import {InputField} from "../../components/forms/InputField";
import {useI18n} from "../../i18n/I18nContext";
import Loader from "../../components/loader/Loader";
import axios from "axios";


const INITIAL_VALUES = {
    code: "",
};

interface Props {
    readonly switchUser: boolean;
}

export default function SignUpPage2({switchUser}: Props) {
    const {authApi} = useAuthContext();
    const {translate} = useI18n();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [error, setError] = useState("");
    const [phone, setPhone] = useState<string | any>("");
    useEffect(() => (
        switchUser ? setPhone(window.localStorage.getItem("phoneUser")) : setPhone(window.localStorage.getItem("phoneSpeaker"))
    ), []);
    const submitHandler = useCallback((value) => {
        setLoading(true);
            authApi.codeVerify({
                query: {
                    phone: phone,
                    code: value.code
                }
            }).then((res) => {
                    if (res.success === true) {
                        setLoading(false);
                        history.replace({pathname: Routes.SignUp3})
                    } else if (res.success === false) {
                        setLoading(false);
                        setError(translate("TITTLE_CODE_VERIFY_ERROR"))
                    }
                    localStorage.setItem("code", res?.data?.code);
                }
            )
    }, [authApi, history, phone]);
    const submitHandlerSpeaker = useCallback((value) => {
        setLoading(true);
        let form = new FormData();
        form.append('phone_number', phone );
        form.append('code', value.code );
        axios.post("http://edubackend.backoffice.uz/signup", form).then((res) => {
            if(res.data.success === true) {
                    setLoading(false);
                    history.replace({pathname: Routes.SignUp3});
                    localStorage.setItem("code", res?.data.data.code);
            } else if(res.data.success === false) {
                setLoading(false);
                setError(translate("TITTLE_CODE_VERIFY_ERROR"));
            }
        }
        )
    }, [history, phone, translate]);
    return (
        <>
            <section className="sectionSignUpPage2">
                <div className="container">
                    <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => {switchUser ? submitHandler(values) : submitHandlerSpeaker(values)}}>
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="mainSignUpPage2">

                                    <div className="signUpPage-input-item2">
                                        <InputField
                                            inputClassName="signUpPage-inner-item2"
                                            placeholder="Kodni kiriting"
                                            type="nummber"
                                            name="code"
                                        />
                                        {error && <div className="error-text" >
                                            {error}
                                        </div>}
                                        <button className="signUpPage-btn-inner2" type="submit">
                                            {loading ? <div className="block-loading">
                                                <p className="">Iltimos kuting...</p>
                                            </div> : <span>Davom etish</span>}
                                        </button>
                                        <p className="signUpPage-text-item2">
                                            Akkauntingiz bormi? unda <Link  to={Routes.LoginPage}>bu yerga</Link> bosing
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
