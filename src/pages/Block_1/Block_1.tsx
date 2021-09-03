import React, {useCallback, useEffect, useState} from 'react';
import '../../components/css/Block_1.css'
import video_logo from './img/Play.svg'
import img_1 from './img/Section3_1.svg'
import img_2 from './img/Section3_2.svg'
import location from './img/location.svg'
import phone from './img/phone.svg'
import mail from './img/mail.svg'
import mfaktor_logo from './img/MFaktor greY 1.png'
import dekos_logo from './img/dekos.png'
import deli_logo from './img/deli.png'
import mountain_logo from './img/mountain.png'
import algoritm_logo from './img/algop.png'
import najot_logo from './img/Najot.png'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import {useAuthContext} from "../../api/auth/authContext";
import {Formik} from "formik";
import {InputField} from "../../components/forms/InputField";
import {TextAreaField} from "../../components/forms/TextAreaField";
import {toast} from "react-toastify";

const INITIAL_VALUES = {
    name: "",
    phone: "",
    email: "",
    message: ""
};

export default function Block_1() {
    const {authApi} = useAuthContext();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const sendMessageHandler = useCallback((value) => {
        setLoading(true);
        authApi.sendMessage({
            data: {
                name: value.name,
                phone_number: value.phone,
                email: value.email,
                message: message
            }
        }).then(res => {
            if (res.id) {
                toast.success("Xabar yuborildi", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        })
    }, [authApi, message]);
    return (
        <React.Fragment>

            <div className="section_1 container">
                <h5>Online</h5>
                <h6>ta'lim platformasi</h6>
                <h1>O’zbekistondagi ilk</h1>
                <h3>onlayn o’quv platformasi</h3>
                <p>Treninglar, seminarlar, vebinar va online darsliklar uchun yagona o`zbek tilidagi platforma.
                    Muvaffaqiyatli insonlar ilmi bilan bo`lishamiz.</p>
                <div className='section_1_vid'>
                    <img src={video_logo} alt=""/>
                    <h4>Videoni ko'rish</h4>
                </div>
            </div>

            {/* section - 2 */}
            <div className="section_2_title">
                <h6>HAMKORLARIMIZ</h6>
                <h2>Eduon <span>hissa</span> qo’shganlar</h2>
            </div>
            <div className="section_2 container">
                <img className='blog1_imgSwip' src={mfaktor_logo} alt=""/>
                <img className='blog1_imgSwip' src={dekos_logo} alt=""/>
                <img className='blog1_imgSwip' src={deli_logo} alt=""/>
                <img className='blog1_imgSwip' src={algoritm_logo} alt=""/>
                <img className='blog1_imgSwip' src={mountain_logo} alt=""/>
                <img className='blog1_imgSwip' src={najot_logo} alt=""/>
            </div>

            {/* section - 3 */}
            <div className="section_3 container">
                <img src={img_1} alt=""/>

                <div className='section_3_title'>
                    <h2>Biz haqimizda</h2>
                    <p>EduOn MFaktor tomonidan har kimga, hamma joyda hayotni o'zgartiradigan ta'lim tajribalarini
                        taqdim etish niyatida asos solingan.<br/><br/> Hozirda bu O'zbekiston bo'ylab million o'quvchi
                        kelajak ko'nikmalarini o'rganish uchun yetakchi onlayn ta'lim
                        platformasi.<br/><br/> O'zbekistonning dan ortiq eng yaxshi universitetlari va soha
                        o'qituvchilari EduOn bilan hamkorlik qilib, kurslar, mutaxassisliklar, sertifikatlar va diplom
                        dasturlarini taklif qilmoqdalar.</p>
                </div>

                <div className='section_3_title section_3_title_1'>
                    <h2>Kurs haqida</h2>
                    <p>EduOn dagi har bir kursni jahon miqyosidagi universitetlar va kompaniyalarning ustozlari
                        o'qitadilar, shuning uchun siz istagan vaqtingizda va istagan joyda yangi narsalarni
                        o'rganishingiz mumkin. <br/> <br/>Yuzlab kurslar talab bo'yicha video ma'ruzalar, uy vazifalari
                        mashqlari va jamoatchilik muhokamalari forumlariga kirish imkoniyatini beradi. Har kuni o'zingiz
                        uchun yangilik kashf eting!</p>
                    <div className='section_1_vid vid'>
                        <img src={video_logo} alt=""/>
                        <h4>Videoni ko'rish</h4>
                    </div>
                </div>

                <img src={img_2} alt=""/>

                <div className='section_3_title section_3_title_2'>
                    <h2>Kurs haqida</h2>
                    <p>EduOn dagi har bir kursni jahon miqyosidagi universitetlar va kompaniyalarning ustozlari
                        o'qitadilar, shuning uchun siz istagan vaqtingizda va istagan joyda yangi narsalarni
                        o'rganishingiz mumkin. <br/> <br/>Yuzlab kurslar talab bo'yicha video ma'ruzalar, uy vazifalari
                        mashqlari va jamoatchilik muhokamalari forumlariga kirish imkoniyatini beradi. Har kuni o'zingiz
                        uchun yangilik kashf eting!</p>
                    <div className='section_1_vid vid'>
                        <img src={video_logo} alt=""/>
                        <h4>Videoni ko'rish</h4>
                    </div>
                </div>

            </div>

            {/* section - 4 */}

            <div className="section_4 container">
                <div className="section_4_box">
                    <div>
                        <img src={location} alt=""/>
                    </div>
                    <h5>Shota Rustaveli 6-uy</h5>
                </div>

                <div className="section_4_box">
                    <div>
                        <img src={phone} alt=""/>
                    </div>
                    <h5> (99) 702-00-88 </h5>
                </div>

                <div className="section_4_box">
                    <div>
                        <img src={mail} alt=""/>
                    </div>
                    <h5>eduon@gmail.com</h5>
                </div>
            </div>

            {/* section - 5 */}
            <div className="section_5 container">
                <Formik onSubmit={sendMessageHandler} initialValues={INITIAL_VALUES}>
                    {({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="section_5_box">
                                <div className="section_5_contact">
                                    <div className="contact_left">
                                        <p>Ismingiz</p>
                                        <InputField inputClassName="input" placeholder='Ismingiz' name="name"/>

                                        <p>Elektron pochtangiz</p>
                                        <InputField inputClassName="input" placeholder='Elektron pochtangiz' name="email"/>

                                        <p>Telefon raqamingiz</p>
                                        <InputField inputClassName="input"  placeholder='Telefon raqamingiz' name="phone"/>
                                    </div>

                                    <div className="contact_right">
                                        <p>Xabaringiz</p>
                                        <textarea className="pcmode" name="" id="" cols={30} rows={14}
                                                  placeholder='Xabaringiz...' onChange={(e) => setMessage(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="section_5_btn_div">
                                    <button className='section_5_btn' type="submit">{!success ? (loading ? "Yuborilyapti...": "Yuborish" ) : "Yuborildi"}</button>
                                </div>

                                {/* <img className='cursor' src={cursor} alt="" /> */}

                            </div>
                        </form>
                    )}
                </Formik>

            </div>


        </React.Fragment>
    );
}
