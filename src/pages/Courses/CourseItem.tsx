import React, {useEffect, useState} from 'react';
import {useCourseContext} from "../../api/course/CourseContext";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import star_logo from "./img/Star.svg";
import bookmark from "./img/Bookmark.svg";
import startcard from "./img/starcard.svg";
import wiewcard from "./img/wiewcard.svg";
import {useI18n} from "../../i18n/I18nContext";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper/core";

SwiperCore.use([Navigation]);


interface Props {
    readonly data: any;
}

export default function Coursess({data}: Props) {
    const [courses, setCourses] = useState<any[]>([]);
    const {courseApi} = useCourseContext();
    const {translate} = useI18n();
    useEffect(() => {
        courseApi.getSpeakerCourses({
            query: {
                id: data.id
            }
        }).then((res) => {
                setCourses(res.courses)
        });
    }, [courseApi, setCourses, data?.id]);
    return (
        <div className='courses_sec2_chanBox'>
            <div className="courses_sec2_chanBox_line">

                <Swiper
                    slidesPerView={3.5}
                    freeMode={true}
                    breakpoints={{
                        "10": {
                            "slidesPerView": 1.5,
                            "spaceBetween": 0
                        },
                        "320": {
                            "slidesPerView": 1.2,
                            "spaceBetween": 0
                        },
                        "375": {
                            "slidesPerView": 1.32,
                            "spaceBetween": 0
                        },
                        "425": {
                            "slidesPerView": 1.7,
                            "spaceBetween": 0
                        },
                        "640": {
                            "slidesPerView": 2.3,
                            "spaceBetween": 0
                        },
                        "768": {
                            "slidesPerView": 2.8,
                            "spaceBetween": 0
                        },
                        "1024": {
                            "slidesPerView": 2.6,
                            "spaceBetween": 0
                        },
                        "1440": {
                            "slidesPerView": 3.5,
                            "spaceBetween": 0
                        }
                    }}
                    navigation={true}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="swipper_chanBox">

                            <div className="courses_sec2_chanBox_Teacher">
                                <img src={`https://speaker.eduon.uz/${data?.image2}`} alt=""/>
                                <h2>{data?.full_name.split(" ")[0]} {data?.full_name.split(" ")[1].substring(0,1)}.</h2>
                                <h3>{data?.kasbi}</h3>
                                <h3>{data?.compony}</h3>
                                <div>
                                    <img src={star_logo} alt=""/>
                                    <h4>{data?.satars_teach}</h4>
                                    <h5>{data?.stars_all}</h5>
                                </div>
                                <button>{translate("TITTLE_COURSE_PROFIL")}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    {courses && courses[0]?.map((x: any) => {
                            return (
                                <SwiperSlide>
                                    <div className="swipper_chanBox" key={x.id}>
                                        <div className="courses_sec2_chanBox_cours">
                                            <img className="courses_sec2_chanBox_img2"
                                                 src={`https://speaker.eduon.uz/${x?.image}`} alt="imagee"/>
                                            <div className="courses_sec2_chanBox_title">
                                                <h3>{x.name.length > 30 ? (x.name.substring(0, 30) + "...") : x.name}</h3>
                                                <img src={bookmark} alt=""/>
                                            </div>
                                            <div className="courses_sec2_chanBox_wiew">
                                                <div>
                                                    <img src={startcard} alt=""/>
                                                    <p>
                                                        {x?.course_rank?.rank} <span>({x?.course_rank?.count})</span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <img src={wiewcard} alt=""/>
                                                    <p>{x.view}</p>
                                                </div>
                                            </div>
                                            <div className="price">
                                                {x.turi !== "Bepul" ?
                                                    x.discount > 0 ?
                                                        <h5>{x.price} <span>so'm</span></h5>
                                                        :
                                                        <div>
                                                            {x.discount > 0 && <h6 className="price-sale sale23">{x.discount} <span>so'm</span></h6>}
                                                            <h5 className="price-sale">{x.price}  <span>so'm</span></h5>
                                                        </div>

                                                    :
                                                    <p className={x?.turi === "Bepul" ? "freeprice": " "}>{x?.turi}</p>
                                                }
                                                <button>{translate("TITTLE_COURSE_XARIDQILISH")}</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}

