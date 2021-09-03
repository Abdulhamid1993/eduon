import React, {useEffect, useState} from 'react';
import Left from "../../components/icons/Left.svg"
import Right from "../../components/icons/Right.svg"
import play from "../../components/icons/Play.svg"
import icon1 from "../../components/icons/Icon1.svg"
import icon2 from "../../components/icons/Icon2.svg"
import icon3 from "../../components/icons/Icon3.svg"
import playvideo from "../../components/icons/Playvideo.svg"
import cursor from "../../components/icons/Cursor.svg"
import shield from "../../components/icons/Shield.svg"
import {Link} from "react-router-dom"
import profile1 from "../../components/images/Profile1.svg"
import profile2 from "../../components/images/Profile2.svg"
import profile3 from "../../components/images/Profile3.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation } from "swiper/core";
import {useI18n} from "../../i18n/I18nContext";
import {useStatisticContext} from "../../api/statistics/StatisticContext";
SwiperCore.use([Navigation]);

interface Props {
    readonly handlebilim: () => void;
}

export default function Bilimberish ({handlebilim}:Props){
    const {statisticApi} = useStatisticContext();
    const {translate} = useI18n();
    const [statistics, setStatistics]= useState([]);
    useEffect(() => {
        let mounted = true;
        statisticApi.getStatistic().then(res => {
        if(mounted)
        {setStatistics(res.data)}});
        return () => {
            mounted = false
        }
    }, [statisticApi]);
    console.log(statistics, "data");
    return (
        <React.Fragment>
            <section className="section__1 container">
                <div className="sec__1_h1">
                    <button onClick={handlebilim}><img src={Left} alt="" /></button>
                    <h1>{translate("TITTLE_MAIN2_ONLINE")} <br /><span>{translate("TITTLE_MAIN2_PLATFORM")}</span></h1>
                    <button onClick={handlebilim}><img src={Right} alt="" /></button>
                </div>
                <div className="sec__1_p"><p>{translate("TITTLE_MAIN2_KELAJAK")}</p></div>
                <div className="sec__1_video">
                    <div className="sec__1_video__1"><a href="#">{translate("TITTLE_MAIN2_BILIM")}</a></div>
                    <div className="sec__1_video__2">
                        <img src={play} alt="" />
                        <p>{translate("TITTLE_MAIN2_VIDEO")}</p></div>
                </div>
                <div className="sec__1_btn">
                    <h3>{translate("TITTLE_MAIN2_BILIMOLUVCHI")}</h3>
                    <h5>{translate("TITTLE_MAIN2_OQUVCHI")}</h5>
                    <button className="scrollfigure" onClick={handlebilim}><p></p></button>
                    <h2>{translate("TITTLE_MAIN2_BILIMULASHUVCHI")}</h2>
                    <h4>{translate("TITTLE_MAIN2_OQITUVCHI")}</h4>
                </div>
                <div className="sec__1_group">
                    <a href="#" className="group">
                        <img src={icon1} alt="" />
                        <p className="text-group-title">{translate("TITTLE_MAIN2_PROFIL")}</p>
                    </a>
                    <a href="#" className="group">
                        <img src={icon2} alt="" />
                        <p className="text-group-title">{translate("TITTLE_MAIN2_SOHANGIZ")}</p>
                    </a>
                    <a href="#" className="group">
                        <img src={icon3} alt="" />
                        <p className="text-group-title">{translate("TITTLE_MAIN2_OQITISH")}</p>
                    </a>
                </div>
            </section>
            <section className="bilimberish__1">
                <div className="bilimberish__1__content container">
                    <div><h1>1,8 mln</h1><p>{translate("TITTLE_MAIN2_TARIFLAR")}</p></div>
                    <div><h1>250 ming</h1><p>{translate("TITTLE_MAIN2_OQUVCHILAR")}</p> </div>
                    <div><h1>50 ta</h1><p>{translate("TITTLE_MAIN2_SOHA")}</p></div>
                    <div><h1>42,555</h1><p>{translate("TITTLE_MAIN2_SOTILGAN")}</p></div>
                </div>
            </section>
            <section className="bilimberish__2 container">
                <div className="bilimberish__2__h">
                    <h2>{translate("TITTLE_MAIN2_QADAMLAR")}</h2>
                    <h1>{translate("TITTLE_MAIN2_TALIMBERISH")} <span>{translate("TITTLE_MAIN2_QANDAY")}</span><br/> {translate("TITTLE_MAIN2_BOSHLASH")}?</h1>
                </div>
                <div className="bilimberish__2__video">
                    <div className="bilim__berish__video__1">
                        <div className="bilimberish__2__video__a">
                            <a href="#" className="aaa_aaa a_after">{translate("TITTLE_MAIN2_ROYXATDAN")}</a>
                            <p>{translate("TITTLE_MAIN2_BILIMULASHUVCHISIFATIDA")} <Link to="/login">{translate("TITTLE_MAIN2_BUYERGA")}</Link> {translate("TITTLE_MAIN2_BOSING")}</p>
                        </div>
                        <div className="bilimberish__2__video__a">
                            <a href="#" className="aaa_aaa a_after">{translate("TITTLE_MAIN2_MALUMOTLAR")}</a>
                            <p>{translate("TITTLE_MAIN2_PLATFORMATOMONIDAN")}</p>
                        </div>
                        <div className="bilimberish__2__video__a">
                            <a href="#" className="aaa_aaa a_before">{translate("TITTLE_MAIN2_KURSYUKLASH")}</a>
                            <p>{translate("TITTLE_MAIN2_SOHANGIZBOYICHA")}</p>
                        </div>
                    </div>
                    <div className="bilim__berish__video__2">
                        <img src={playvideo} alt="" />
                    </div>
                </div>
            </section>
            <section className="bilimolish__5 container">
                <div className="bilimolish__5__h">
                    <h2>{translate("TITTLE_MAIN2_USTUNLIK")}</h2>
                    <h1>{translate("TITTLE_MAIN2_NEGA")} <span>{translate("TITTLE_MAIN2_AYNAN")}?</span></h1>
                </div>
                <div className="bilimolish__5__feature">
                    <div className="feature feature1 f1 ">
                        <div className="six f__after"><h1><span>{translate("TITTLE_MAIN2_AUDITORIYA")}</span></h1></div>
                        <p>{translate("TITTLE_MAIN2_OZINGIZSHAXSI")}</p>
                    </div>
                    <div className="feature f2">
                        <div className="six f__after"><h1><span>{translate("TITTLE_MAIN2_OQUVCHIMARKAZ")}</span></h1></div>
                        <p>{translate("TITTLE_MAIN2_BEPUL")}</p>
                    </div>
                    <div className="feature f1">
                        <div className="six f__after"><h1><span>{translate("TITTLE_MAIN2_STATISTIKA")}</span></h1></div>
                        <p>{translate("TITTLE_MAIN2_BARCHA")}</p>
                    </div>
                    <div className="feature f2">
                        <div className="six f__after"><h1><span>{translate("TITTLE_MAIN2_STATISTIK")}</span></h1></div>
                        <p>{translate("TITTLE_MAIN2_QOSHIMCHA")}</p>
                    </div>
                    <div className="feature f1">
                        <div className="six"><h1><span>{translate("TITTLE_MAIN2_OSON")}</span></h1></div>
                        <p>{translate("TITTLE_MAIN2_BILIMBERISH")}</p>
                    </div>
                </div>
            </section>
            <section className="bilimolish__6">
                <div className="bilimolish__6__h">
                    <h2>{translate("TITTLE_MAIN2_FIKRLAR")}</h2>
                    <h1><span>{translate("TITTLE_MAIN2_USTOZLAR")}</span>{translate("TITTLE_MAIN2_NIMAFIKIRDA")}?</h1>
                </div>
                <div className="bilimolish__6__slayd">
                    <Swiper
                        slidesPerView={3}
                        navigation={true}
                        loop={true}
                        breakpoints={{
                            "320": {
                                slidesPerView: 1
                            },
                            "375": {
                                slidesPerView: 1
                            },
                            "425": {
                                slidesPerView: 1
                            },
                            "640": {
                                slidesPerView: 1
                            },
                            "768": {
                                slidesPerView: 2
                            },
                            "1024": {
                                slidesPerView: 3
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="slayder__6">
                                <div className="slayder__6__1">
                                    <div className="slayder__6__img"><img src={profile1} alt="" /></div>
                                    <div className="slayder__6__ism"><h1>Diyor Sh.</h1><h2>O'qituvchi</h2></div>
                                </div>
                                <div className="slayder__6__fikr">
                                    <p>Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi bir qacha funksiyalarga ega. Narxlar ham qimmat emas.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slayder__6">
                                <div className="slayder__6__1">
                                    <div className="slayder__6__img"><img src={profile2} alt="" /></div>
                                    <div className="slayder__6__ism"><h1>Shavkat Hasan</h1><h2>O'qituvchi</h2></div>
                                </div>
                                <div className="slayder__6__fikr">
                                    <p>Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi bir qacha funksiyalarga ega. Narxlar ham qimmat emas.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slayder__6">
                                <div className="slayder__6__1">
                                    <div className="slayder__6__img"><img src={profile3} alt="" /></div>
                                    <div className="slayder__6__ism"><h1>Huzayfa B.</h1><h2>O'qituvchi</h2></div>
                                </div>
                                <div className="slayder__6__fikr">
                                    <p>Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi bir qacha funksiyalarga ega. Narxlar ham qimmat emas.</p>
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
                            <h1>{translate("TITTLE_MAIN2_ONLINETALIM")}</h1>
                            <p>{translate("TITTLE_MAIN2_PLATFORMAMIZDA")}!</p>
                        </div>
                        <div className="maindown__1__img">
                            <img src={cursor} alt="" />
                        </div>
                    </div>
                    <div className="maindown__2">
                        <input type="text" placeholder="Tel.raqam"/>
                        <input type="text" placeholder="Ismingiz"/>
                        <button>{translate("TITTLE_MAIN2_ROYXAT")}</button>
                    </div>
                </div>
                <div className="maindown__login">
                    <a href="#">
                        <img src={shield} alt="" />
                        {translate("TITTLE_MAIN2_AKKAUNTINGIZ")}?

                    </a>

                </div>
            </section>

        </React.Fragment>
    );
}
