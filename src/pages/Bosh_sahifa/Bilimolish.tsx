import React, {useCallback, useEffect, useState} from "react";
import Left from "../../components/icons/Left.svg";
import Right from "../../components/icons/Right.svg";
import play from "../../components/icons/Play.svg";
import icon1 from "../../components/icons/Icon1.svg";
import icon2 from "../../components/icons/Icon2.svg";
import icon3 from "../../components/icons/Icon3.svg";
import show from "../../components/icons/Show.svg";
import cursor from "../../components/icons/Cursor.svg";
import shield from "../../components/icons/Shield.svg";
import bookmark from "../../components/icons/Bookmark.svg";
import soha from "../../components/icons/Icon_soha2.svg";
import star from "../../components/icons/Star.svg";
import profile1 from "../../components/images/Profile1.svg";
import profile2 from "../../components/images/Profile2.svg";
import profile3 from "../../components/images/Profile3.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {Navigation} from "swiper/core";
import {useI18n} from "../../i18n/I18nContext";
import {useCourseContext} from "../../api/course/CourseContext";
import {useSpeakerContext} from "../../api/speaker/SpeakerContext";
import {useCategoryContext} from "../../api/category/CategoryContext";
import {useHistory} from "react-router";
import {Routes} from "../../constants/Routes";
import {Link} from "react-router-dom";
import {useShallowEqualSelector} from "../../hooks/useShallowSelector";
import {tokenSelector} from "../../reducers/authReducer";
import {Formik} from "formik";
import {useAuthContext} from "../../api/auth/authContext";
import {InputField} from "../../components/forms/InputField";


SwiperCore.use([Navigation]);

interface Props {
    readonly handlebilim: () => void;
}

const INITIAL_VALUES = {
    phone: "",
    name: ""
};

function Bilimolish({handlebilim}: Props) {
    const {translate} = useI18n();
    const {courseApi} = useCourseContext();
    const {speakerApi} = useSpeakerContext();
    const history = useHistory();
    const {categoryApi} = useCategoryContext();
    const {authApi} = useAuthContext();
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [speakers, setSpeakers] = useState<any[]>([]);
    const [category, setCategory] = useState<any[]>([]);
    const [newCourses, setNewCourses] = useState<any[]>([]);
    const [topCourses, setTopCourses] = useState<any[]>([]);
    const [error, setError] = useState("");
    const token = useShallowEqualSelector(tokenSelector);
    const handleRegisterClick = useCallback((value) => {
        let regexp = /[^a-zа-яё,._\-\/=!?0-9\s]/gi;
        let phoneNumber = value.phone;
        phoneNumber = phoneNumber.replace(/^\s/, '');
        phoneNumber = phoneNumber.replace(/ {2}/, ' ');
        phoneNumber = phoneNumber.replace(regexp, '');
        phoneNumber = phoneNumber.substr(0, 25);
        authApi.loginCredentials({
            query: {
                phone: phoneNumber,
                type: "registeration"
            }
        }).then((res) => {
                if(res.message === "Code yuborildi!") {
                    setLoading(false);
                    history.replace({pathname: Routes.SignUp2})
                } else if(res.success === false) {
                    setLoading(false);
                    setError("Bunday foydalanuvchi avval ro'yxatdan o'tgan! Iltimos tekshirib qaytadan kiriting yoki kirish orqali kiring.")
                }
            }
        )
        if(phoneNumber !== "" && value.name !== "") {
            localStorage.setItem("phoneUser", phoneNumber);
            localStorage.setItem("Username", value.name);
        }
    }, [history]);
    // const buyCourseClick = useCallback((value) => {
    //     courseApi.buyCourse({
    //         data: {
    //             course: value
    //         }
    //     }).then(res => console.log(res, "course"))
    // }, [courseApi]);
    useEffect(() => {
        let mounted = true;
        setLoading(true);
        courseApi.getCourses().then(
            res => {
                if (mounted) {
                    setLoading(false);
                    setData(res.results);
                }
            });
        return () => {
            mounted = false
        }
    }, [courseApi]);
    useEffect(() => {
        let mounted = true;
        speakerApi.getSpeaker().then(
            res => {
                if (mounted) {
                    setSpeakers(res.data);
                }
            });
        return () => {
            mounted = false
        }
    }, [speakerApi]);
    useEffect(() => {
        let mounted = true;
        categoryApi.getCategory().then(
            res => {
                if (mounted) {
                    setCategory(res.data);
                }
            });
        return () => {
            mounted = false
        }
    }, [categoryApi]);
    useEffect(() => {
        let mounted = true;
        courseApi.getNewCourses().then(res => {
            if(mounted) {
                setNewCourses(res.data)
            }
        });
        return () => {
            mounted = false
        }
    }, [courseApi]);
    useEffect(() => {
        let mounted = true;
        courseApi.getTopCourse().then(res => {
            if(mounted) {
                setTopCourses(res.data)
            }
        });
        return () => {
            mounted = false
        }
    }, [courseApi]);
    console.log(topCourses, "top");
    return (
        <React.Fragment>
            <section className="section__1 container">
                <div className="sec__1_h1">
                    <button onClick={handlebilim}>
                        <img src={Left} alt=""/>
                    </button>
                    <h1>
                        {translate("TITTLE_MAIN_PLATFORMA")} <br/>
                        <span>{translate("TITTLE_MAIN_PLATFORM")}</span>
                    </h1>
                    <button onClick={handlebilim}>
                        <img src={Right} alt=""/>
                    </button>
                </div>
                <div className="sec__1_p">
                    <p>{translate("TITTLE_MAIN_TALIM")}</p>
                </div>
                <div className="sec__1_video">
                    <div className="sec__1_video__1">
                        <Link to={Routes.Courses}>{translate("TITTLE_MAIN_KURSLAR")}</Link>
                    </div>
                    <div className="sec__1_video__2">
                        <img src={play} alt=""/>
                        <p>{translate("TITTLE_MAIN_VIDEO")}</p>
                    </div>
                </div>
                <div className="sec__1_btn">
                    <h2>{translate("TITTLE_MAIN_BILIMOLUVCHI")}</h2>
                    <h4>O'quvchi</h4>
                    <button className="scrollfigure" onClick={handlebilim}>
                        <p></p>
                    </button>
                    <h3>{translate("TITTLE_MAIN_BILIMULASHUVCHI")}</h3>
                    <h5>O'qituvchi</h5>
                </div>
                <div className="sec__1_group">
                    <Link to={token === undefined ?
                        Routes.AuthPage : Routes.UserProfile}>
                        <a href="" className="group" onClick={() => {
                            token === undefined ?
                                history.replace({pathname: Routes.AuthPage})
                                : history.replace({pathname: Routes.UserProfile})
                        }}>
                            <img src={icon1} alt=""/>
                            <p className="text-group-title">{translate("TITTLE_MAIN_PROFIL")}</p>
                        </a>
                    </Link>
                    <Link to={Routes.Courses}>
                        <a href="" className="group">
                            <img src={icon2} alt=""/>
                            <p className="text-group-title">{translate("TITTLE_MAIN_KURSTANGLANG")}</p>
                        </a>
                    </Link>
                    <a href="" className="group">
                        <img src={icon3} alt=""/>
                        <p className="text-group-title">{translate("TITTLE_MAIN_OQISHNI")}</p>
                    </a>
                </div>
            </section>
            <section className="bilimolish__2 container">
                <div className="bilimolish__2__h1">
                    <h1>
                        {translate("TITTLE_MAIN_TOP")} <span>{translate("TITTLE_MAIN_KURS")}</span>
                    </h1>
                    <a className="mobile-button-all" href="#"> Barchasi</a>
                </div>
                <div className="bilimolish__2__slayd">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        navigation={true}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            425: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1250: {
                                slidesPerView: 4,
                            },
                        }}
                        className="mySwiper"
                    >
                        {loading ?
                            <span>Loading...</span>
                            : topCourses?.map((slayd1) => {
                                return (
                                    <SwiperSlide>
                                        <div className="swipper__1" key={slayd1?.id}>
                                            <Link to={"/coursesDetails/" + slayd1?.id}>
                                                <div className="bilimolish__2__slayd__img">
                                                    <div className="imgbig__div">
                                                        <img className="imgbig"
                                                             src={slayd1?.image} alt=""/>
                                                    </div>
                                                    <div className="imgbox">
                                                        <img className="imgsmall"
                                                             src={slayd1?.author?.image2}
                                                             alt=""/></div>
                                                </div>
                                            </Link>
                                            <div className="title">
                                                <p>{slayd1.name.length > 50 ? (slayd1.name.substring(0, 30) + "...") : slayd1.name}</p>
                                                <img src={bookmark} alt=""/>
                                            </div>
                                            <div className="feedback">
                                                <div className="stars">
                                                    <img src={star} alt=""/>
                                                    <p>
                                                        {slayd1?.course_rank?.rank}
                                                        <span>({slayd1?.course_rank?.count})</span>
                                                    </p>
                                                </div>
                                                <div className="views">
                                                    <img src={show} alt=""/>
                                                    <p>{slayd1?.view}</p>
                                                </div>
                                            </div>
                                            <div className="price">
                                                {slayd1.turi !== "Bepul" ?
                                                    slayd1.discount > 0 ?
                                                        <h5>{slayd1.price} so'm</h5>
                                                        :
                                                        <div>
                                                            {slayd1.discount > 0 &&
                                                            <h6 className="price-sale sale23">{slayd1.discount} so'm</h6>}
                                                            <h5 className="price-sale">{slayd1.price} so'm</h5>
                                                        </div>

                                                    :
                                                    <p>{slayd1?.turi}</p>
                                                }
                                                <Link to={"/payment/" + slayd1?.id}>
                                                    <a href=""
                                                    >{translate("TITTLE_MAIN_XARID")}</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </div>
                <div className="bilimolish__2__a">
                    <a href=""
                       onClick={() => history.replace({pathname: Routes.Courses})}>{translate("TITTLE_MAIN_BARCHASI")}</a>
                </div>
            </section>
            <section className="bilimolish__2 container">
                <div className="bilimolish__2__h1">
                    <h1>
                        {translate("TITTLE_MAIN_YANGI")}<span>{translate("TITTLE_MAIN_KURSLAR")}</span>
                    </h1>
                    <a className="mobile-button-all" href="#"> Barchasi</a>
                </div>
                <div className="bilimolish__2__slayd">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        navigation={true}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            425: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1250: {
                                slidesPerView: 4,
                            },
                        }}
                        className="mySwiper"
                    >
                        {newCourses?.map((slayd1) => {
                            return (
                                <SwiperSlide>
                                    <div className="swipper__1" key={slayd1?.id}>
                                        <Link to={"/coursesDetails/" + slayd1?.id}>
                                            <div className="bilimolish__2__slayd__img">
                                                <div className="imgbig__div">
                                                    <img className="imgbig"
                                                         src={slayd1?.image} alt=""/>
                                                </div>
                                                <div className="imgbox">
                                                    <img
                                                        className="imgsmall"
                                                        src={slayd1?.author?.image2}
                                                        alt=""/>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="title">
                                            <p>{slayd1.name.length > 50 ? (slayd1.name.substring(0, 30) + "...") : slayd1.name}</p>
                                            <img src={bookmark} alt=""/>
                                        </div>
                                        <div className="feedback">
                                            <div className="stars">
                                                <img src={star} alt=""/>
                                                <p>
                                                    {slayd1?.course_rank?.rank}
                                                    <span>({slayd1?.course_rank?.count})</span>
                                                </p>
                                            </div>
                                            <div className="views">
                                                <img src={show} alt=""/>
                                                <p>{slayd1?.view}</p>
                                            </div>
                                        </div>
                                        <div className="price">
                                            {slayd1.turi !== "Bepul" ?
                                                slayd1.discount > 0 ?
                                                    <h5>{slayd1.price} so'm</h5>
                                                    :
                                                    <div>
                                                        {slayd1.discount > 0 &&
                                                        <h6 className="price-sale sale23">{slayd1.discount} so'm</h6>}
                                                        <h5 className="price-sale">{slayd1.price} so'm</h5>
                                                    </div>

                                                :
                                                <p>{slayd1?.turi}</p>
                                            }
                                            <a href="#">{translate("TITTLE_MAIN_XARID")}</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <
                    div
                    className="bilimolish__2__a">
                    < a
                        href=""
                        onClick={() =>
                            history.replace({pathname: Routes.Courses})
                        }>
                        {
                            translate("TITTLE_MAIN_BARCHASI")
                        }
                    </a>
                </div>
            </section>
            <section className="bilimolish__3">
                <div className="bilimolish__3__h">
                    <h2>{translate("TITTLE_MAIN_SPIKER")}</h2>
                    <h1>
                        {translate("TITTLE_MAIN_DAN")}<span> {translate("TITTLE_MAIN_ORTIQMAXSULOT")}</span>
                    </h1>
                </div>
                <div className="bilimolish__3__slayd ">
                    <Swiper
                        slidesPerView={4}
                        navigation={true}
                        loop={true}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            425: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1250: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {speakers?.slice(0, 10).map((x) => {
                            return (
                                <SwiperSlide>
                                    <div className="slayder__3" key={x?.id}>
                                        <img className="slayd__3__img"
                                             src={x?.image2} alt="Speaker_image"/>

                                        <h1>{x?.full_name.split(" ")[0]} {x?.full_name.split(" ")[1].substring(0, 1)}.</h1>
                                        <h2>{x?.kasbi.length > 15 ? (x?.kasbi.substring(0, 15)) + "." : x?.kasbi}</h2>
                                        <h2>{x?.compony ? x?.compony : "-"}</h2>
                                        <div className="stars">
                                            <img src={star} alt=""/>
                                            <p>
                                                {x.speaker_rank.rank}
                                                <span>({x.speaker_rank.count})</span>
                                            </p>
                                        </div>
                                        <a href="#">{translate("TITTLE_MAIN_PROFILS")}</a>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="bilimolish__2__a">
                    <a href=""
                       onClick={() => history.replace({pathname: Routes.Courses})}>{translate("TITTLE_MAIN_BARCHASI")}</a>
                </div>
            </section>
            <section className="bilimolish__4">
                <div className="bilimolish__4__h">
                    <h2>{translate("NAVBAR_COURSES_TITTLE")}</h2>
                    <h1>
                        {translate("TITTLE_MAIN_DANS")}
                        <span>{translate("TITTLE_MAIN_ORTIQSOXA")} </span>4000+ <span>{translate("NAVBAR_COURSES_TITTLES")}</span>
                    </h1>
                </div>
                <div className="bilimolish__4__slayd">
                    <Swiper
                        slidesPerView={4}
                        navigation={true}
                        loop={true}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            425: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1250: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {category.map((x) => (
                            <SwiperSlide>
                                <a href="#" className="slayder__4" key={x?.id}>
                                    {/*<img src={`https://speaker.eduon.uz/${x?.image}`} alt=""/>*/}
                                    <img src={soha} alt=""/>
                                    <h1>{x?.name}</h1>
                                    <h2>{x?.course_count} ta</h2>
                                </a>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
                <div className="bilimolish__2__a">
                    <a href=""
                       onClick={() => history.replace({pathname: Routes.Courses})}>{translate("TITTLE_MAIN_BARCHASI")}</a>
                </div>
            </section>
            <section className="bilimolish__5 container">
                <div className="bilimolish__5__h">
                    <h2>{translate("TITTLE_MAIN_USTUNLIK")}</h2>
                    <h1>
                        {translate("TITTLE_MAIN_NEGA")} <span>{translate("TITTLE_MAIN_AYNAN")}?</span>
                    </h1>
                </div>
                <div className="bilimolish__5__feature">
                    <div className="feature feature1  f1 ">
                        <div className="six f__after">
                            <h1>
                                <span>{translate("TITTLE_MAIN_QULAY")}</span>
                            </h1>
                        </div>
                        <p>{translate("TITTLE_MAIN_PLATFORMADA")} 24/7 {translate("TITTLE_MAIN_SOAT")}.</p>
                    </div>
                    <div className="feature  f2">
                        <div className="six f__after">
                            <h1>
                                <span>{translate("TITTLE_MAIN_ISTALGANJOY")}</span>
                            </h1>
                        </div>
                        <p>{translate("TITTLE_MAIN_INTERNETBOLSA")}.</p>
                    </div>
                    <div className="feature  f1">
                        <div className="six f__after">
                            <h1>
                                <span>{translate("TITTLE_MAIN_MUTAXASISLAR")}</span>
                            </h1>
                        </div>
                        <p>{translate("TITTLE_MAIN_DASTURLASHMUTAXASISLAR")}.</p>
                    </div>
                    <div className="feature  f2">
                        <div className="six f__after">
                            <h1>
                                <span>{translate("TITTLE_MAIN_AKTUAL")}</span>
                            </h1>
                        </div>
                        <p>{translate("TITTLE_MAIN_BARCHAAQTUAL")}.</p>
                    </div>
                    <div className="feature feature5 f1">
                        <div className="six">
                            <h1>
                                <span>{translate("TITTLE_MAIN_OSON")}</span>
                            </h1>
                        </div>
                        <p>{translate("TITTLE_MAIN_SAMARALIILM")}.</p>
                    </div>
                </div>
            </section>
            <section className="bilimolish__6">
                <div className="bilimolish__6__h">
                    <h2>{translate("TITTLE_MAIN_FIKIRLAR")}</h2>
                    <h1>
                        <span>{translate("TITTLE_MAIN_ULARBIZXAQIMIZDA")}</span> {translate("TITTLE_MAIN_NIMAFIKIR")}?
                    </h1>
                </div>
                <div className="bilimolish__6__slayd">
                    <Swiper
                        slidesPerView={3}
                        navigation={true}
                        loop={true}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            425: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="slayder__6">
                                <div className="slayder__6__1">
                                    <div className="slayder__6__img">
                                        <img src={profile1} alt=""/>
                                    </div>
                                    <div className="slayder__6__ism">
                                        <h1>Diyor Sh.</h1>
                                        <h2>O'qituvchi</h2>
                                    </div>
                                </div>
                                <div className="slayder__6__fikr">
                                    <p>
                                        Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi
                                        bir qacha funksiyalarga ega. Narxlar ham qimmat emas.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slayder__6">
                                <div className="slayder__6__1">
                                    <div className="slayder__6__img">
                                        <img src={profile2} alt=""/>
                                    </div>
                                    <div className="slayder__6__ism">
                                        <h1>Shavkat Hasan</h1>
                                        <h2>O'qituvchi</h2>
                                    </div>
                                </div>
                                <div className="slayder__6__fikr">
                                    <p>
                                        Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi
                                        bir qacha funksiyalarga ega. Narxlar ham qimmat emas.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slayder__6">
                                <div className="slayder__6__1">
                                    <div className="slayder__6__img">
                                        <img src={profile3} alt=""/>
                                    </div>
                                    <div className="slayder__6__ism">
                                        <h1>Huzayfa B.</h1>
                                        <h2>O'qituvchi</h2>
                                    </div>
                                </div>
                                <div className="slayder__6__fikr">
                                    <p>
                                        Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi
                                        bir qacha funksiyalarga ega. Narxlar ham qimmat emas.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="maindown container">
                <div className="maindown__asos">
                    <div className="maindown__1">
                        <div className="maindown__1__h">
                            <h1>{translate("TITTLE_MAIN_ONLINETALIM")}</h1>
                            <p>
                                {translate("TITTLE_MAIN_PLATFORMAORQALI")}!
                            </p>
                        </div>
                        <div className="maindown__1__img">
                            <img src={cursor} alt=""/>
                        </div>
                    </div>
                    <Formik onSubmit={handleRegisterClick} initialValues={INITIAL_VALUES}>
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="maindown__2">
                                    <InputField placeholder="Tel.raqam" inputClassName="input" name="phone" />
                                    <InputField placeholder="Ismingiz" inputClassName="input" name="name" />
                                    <button type="submit">{translate("TITTLE_MAIN_ROYXATANOTISH")}</button>
                                </div>
                                {error && <div className="error-text-main" >
                                    {error}
                                </div>}
                            </form>
                        )}
                    </Formik>
                </div>
                <div className="maindown__login">
                    <Link to={Routes.AuthPage}>
                        <a href="#">
                            <img src={shield} alt=""/>
                            {translate("TITTLE_MAIN_AKKAUNTINGIZ")}?
                        </a>
                    </Link>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Bilimolish;
