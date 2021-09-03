import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import "../../components/css/Courses.css";
import cdown from "./img/cdown.png";
import down_logo from "./img/down.png";
import up_logo from "./img/up.png";
import star_logo from "./img/Star.svg";
import bookmark from "./img/Bookmark.svg";
import startcard from "./img/starcard.svg";
import wiewcard from "./img/wiewcard.svg";
import search_logo from "./img/search.svg";
import cdup from "./img/cdup.png";
import hamburger_icon from './img/hamburger.svg'
import Xlogo from './img/Xlogo.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {Navigation} from "swiper/core";
import {useI18n} from "../../i18n/I18nContext";
import {useCourseContext} from "../../api/course/CourseContext";
import {useSpeakerContext} from "../../api/speaker/SpeakerContext";
import Coursess from "./CourseItem";
// 
import {Link, NavLink} from 'react-router-dom'
import {useCategoryContext} from "../../api/category/CategoryContext";
import PackagePagination from "../../components/pagination/Paginator";

SwiperCore.use([Navigation]);


interface Props {
    readonly switchUser: boolean,
    readonly setSwitchUser: Dispatch<SetStateAction<boolean>>
}

export default function Courses({setSwitchUser, switchUser}: Props) {
    const [fixed, setFixed] = useState(false);
    const [reyting, setReyting] = useState(false);
    const [bolimlar, setBolimlar] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [resultAfterSearch, setResultAfterSearch] = useState([]);
    const [yangiQoshilganlar, setYangiQoshilganlar] = useState(false);
    const [rank, setRank] = useState(false);
    const [rank2, setRank2] = useState(false);
    const [rank3, setRank3] = useState(false);
    const [rank4, setRank4] = useState(false);
    const [fontend, setFrontend] = useState(false);
    const [backend, setBackend] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [flutter, setFlutter] = useState(false);
    const [suniy, setSuniy] = useState(false);
    const {translate} = useI18n();
    const {courseApi} = useCourseContext();
    const {speakerApi} = useSpeakerContext();
    const [data, setData] = useState<any>([]);
    const [speakersData, setSpeakersData] = useState([]);
    const {categoryApi} = useCategoryContext();
    const [category, setCategory] = useState<any[]>([]);
    const [categoryId, setCategoryId] = useState<any>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageCount, setPageCount] = useState<any>(1);
    const [active, setActive] = useState(true);
    const [toifa, setToifa] = useState("");
    const searchHandler = useCallback((value) => {
            courseApi.searchCourse({
                query: {
                    search: searchText,
                    page: pageNumber
                }
            }).then(res => {
                setResultAfterSearch(res.results);
                setPageCount(res.num_pages)
            })
    }, [courseApi, searchText]);
    const getCourseHandler = useCallback((value) => {
            courseApi.getCourses({
                query: {
                    page: pageNumber
                }
            }).then(res => {
                setData(res.results);
                setPageCount(res.num_pages);
            })
    }, [courseApi, pageNumber]);
    useEffect(() => {
        if(toifa === "new") {
        courseApi.getNewCourses().then(res => setResultAfterSearch(res.data));
        } else if(toifa === "2021-03-01"){
            courseApi.getCourses({
                query: {
                    date: "2021-03-01",
                    page: pageNumber
                }
            }).then(res => {
                setResultAfterSearch(res.results);
                setPageCount(res.num_pages);
            })
        } else if(toifa === "5"){
            courseApi.getCourses({
                query: {
                    rank: "5",
                    page: pageNumber
                }
            }).then(res => {
                setResultAfterSearch(res.results);
                setPageCount(res.num_pages);
            })
        } else if(toifa === "Pullik"){
            courseApi.getCourses({
                query: {
                    toifa: "Pullik",
                    toifa_sort: "desc",
                    page: pageNumber
                }
            }).then(res => {
                setResultAfterSearch(res.results);
                setPageCount(res.num_pages);
            })
        } else(
            courseApi.getCourses({
                query: {
                    toifa: "Bepul",
                    page: pageNumber
                }
            }).then(res => {
                setResultAfterSearch(res.results);
                setPageCount(res.num_pages);
            })
        )
    }, [toifa, courseApi, pageNumber]);
    useEffect(() => {
        let mounted = true;
        if (categoryId) {
            courseApi.searchCourse({
                query: {
                    category: categoryId,
                    page: pageNumber
                }
            }).then(res => {
                if(mounted) {
                    setResultAfterSearch(res.results);
                    setPageCount(res.num_pages);
                }
            });
        } else {
            courseApi.getCourses({
                query: {
                    page: pageNumber
                }
            }).then(res => {
                if(mounted) {
                    setData(res.results);
                    setPageCount(res.num_pages)
                }
            });
        }
        return () => {
            mounted = false
        }
    }, [categoryId, pageNumber,  courseApi]);
    useEffect(() => {
        let mounted = true;
        speakerApi.getSpeaker().then(res => {
            if (mounted) {
                setSpeakersData(res.data)
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
    return (
        <React.Fragment>
            <div className="courses container">
                <div className="courses_section_1">
                    <h1>{translate("TITTLE_COURSE_XUSHKELIBSIZ")}</h1>
                    <h3>{translate("TITTLE_COURSE_ILM")}</h3>
                    <p>{translate("TITTLE_COURSE_XOSHBUGUN")}?</p>

                    {switchUser ? (
                        <div className="courses_sec_btn">
                            <h2 className="course_btn_active">{translate("TITTLE_COURSE_BOLIM")}
                                <span>{translate("TITTLE_COURSE_BOYICHA")}</span></h2>
                            <button onClick={() => setSwitchUser(prev => !prev)} className="course_btn_1">
                                <div></div>
                            </button>
                            <h2 className="course_btn_pass">{translate("TITTLE_COURSE_USTOZLAR")}
                                <span>{translate("TITTLE_COURSE_BOYICHA")}</span></h2>
                        </div>
                    ) : (
                        <div className="courses_sec_btn">
                            <h2 className="course_btn_pass">{translate("TITTLE_COURSE_BOLIMLAR")}
                                <span>{translate("TITTLE_COURSE_BOYICHA")}</span></h2>
                            <button onClick={() => setSwitchUser(prev => !prev)} className="course_btn_2">
                                <div></div>
                            </button>
                            <h2 className="course_btn_active">{translate("TITTLE_COURSE_USTOZLAR")}
                                <span>{translate("TITTLE_COURSE_BOYICHA")}</span></h2>
                        </div>
                    )}
                </div>


                            <div className="courses_section_2">
                                <div className={` dnone courses_section_2_fixed ` + `${!fixed && "courses_section_2_fixed_act"}`}>
                                    <form onSubmit={(e) => {e.preventDefault(); searchHandler(e)}}>
                                    <div className="courses_section_2_left">
                                        <div className="courses_section_2_filter">
                                            <h1>Filter</h1>
                                            <img onClick={() => setFixed(prev => !prev)} src={Xlogo} alt=""/>
                                        </div>
                                        <div className="courses_sec2_yangiQoshilagan">
                                            <div
                                                className="courses_sec2_1"
                                                onClick={() => setYangiQoshilganlar(prev => !prev)}
                                            >
                                                <h3>
                                                    {toifa === "new" && "Yangi shilganlar"}
                                                    {toifa === "2021-03-01" && "Eski kurslar"}
                                                    {toifa === "5" && "Reyting bo'yicha"}
                                                    {toifa === "Pullik" && "Pul bo'yicha"}
                                                    {toifa === "Bepul" && "Bepul kurslar"}
                                                </h3>
                                                {!yangiQoshilganlar ? (
                                                    <img src={cdown} alt=""/>
                                                ) : (
                                                    <img src={cdup} alt=""/>
                                                )}
                                            </div>
                                            {yangiQoshilganlar ? (
                                                <div className="courses_yangiQoshilagan_list">
                                                    <p onClick={() => setToifa("new")}>Yangi qo'shilganlar</p>
                                                    <p onClick={() => setToifa("2021-03-01")}>Eski kurslar</p>
                                                    <p onClick={() => setToifa("5")}>Reyting bo'yicha</p>
                                                    <p onClick={() => setToifa("Pullik")}>Pul bo'yicha</p>
                                                    <p onClick={() => setToifa("Bepul")}>Bepul kurslar</p>
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="courses_sec2_2">

                                        </div>

                                        <div className="courses_sec2_3">
                                            <div className="cor_sec2_reyting" onClick={() => setReyting(prev => !prev)}>
                                                <h4>{translate("TITTLE_COURSE_REYTING")}</h4>
                                                {reyting ? (
                                                    <img src={up_logo} alt=""/>
                                                ) : (
                                                    <img src={down_logo} alt=""/>
                                                )}
                                            </div>

                                            {reyting ? (
                                                <div className="star_checkbox_blog">

                                                    <div className='star_chaeckbox'>
                                                        <label className='custom-checkbox'>
                                                            <p>
                                                                <img src={star_logo} alt=""/>
                                                                4,5-5 <h4>(12,965)</h4>
                                                            </p>
                                                            <input type="checkbox" name="rank" id="" checked={rank}
                                                                   onChange={() => {
                                                                       setRank(prevState => !prevState)
                                                                   }}/>
                                                            <span></span>
                                                        </label>
                                                    </div>

                                                    <div className='star_chaeckbox'>
                                                        <label className='custom-checkbox'>
                                                            <p>
                                                                <img src={star_logo} alt=""/>
                                                                3-4,5 <h4>(12,965)</h4>
                                                            </p>
                                                            <input type="checkbox" name="rank2" checked={rank2}
                                                                   value="3-4,5"
                                                                   onChange={() => {
                                                                       setRank2(prevState => !prevState)
                                                                   }}/>
                                                            <span></span>
                                                        </label>
                                                    </div>

                                                    <div className='star_chaeckbox'>
                                                        <label className='custom-checkbox'>
                                                            <p>
                                                                <img src={star_logo} alt=""/>
                                                                4,5-5 <h4>(12,965)</h4>
                                                            </p>
                                                            <input type="checkbox" checked={rank3} name="rank3"
                                                                   value="4,5-5"
                                                                   onChange={() => {
                                                                       setRank3(prevState => !prevState)
                                                                   }}
                                                            />
                                                            <span></span>
                                                        </label>
                                                    </div>


                                                    <div className='star_chaeckbox'>
                                                        <label className='custom-checkbox'>
                                                            <p>
                                                                <img src={star_logo} alt=""/>
                                                                4,5-5 <h4>(12,965)</h4>
                                                            </p>
                                                            <input type="checkbox" name="rank4" id="" checked={rank4}
                                                                   onChange={() => {
                                                                       setRank4(prevState => !prevState)
                                                                   }}/>
                                                            <span></span>
                                                        </label>
                                                    </div>


                                                </div>
                                            ) : null}
                                        </div>


                                        <div>
                                            {/*<div className="courses_sec2_3">*/}
                                            {/*    <div*/}
                                            {/*        className="cor_sec2_reyting"*/}
                                            {/*        onClick={() => setTil(prev => !prev)}*/}
                                            {/*    >*/}
                                            {/*        <h4>Til</h4>*/}
                                            {/*        {til ? (*/}
                                            {/*            <img src={up_logo} alt=""/>*/}
                                            {/*        ) : (*/}
                                            {/*            <img src={down_logo} alt=""/>*/}
                                            {/*        )}*/}
                                            {/*    </div>*/}

                                            {/*    {til ? (*/}
                                            {/*        <div className="til_check_blog">*/}
                                            {/*            <div className='star_chaeckbox'>*/}
                                            {/*                <label className='custom-checkbox'>*/}
                                            {/*                    <h6>{translate("TITTLE_COURSE_UZBEKCHA")}</h6>*/}
                                            {/*                    <input type="checkbox" name="" id=""/>*/}
                                            {/*                    <span></span>*/}
                                            {/*                </label>*/}
                                            {/*            </div>*/}

                                            {/*            <div className='star_chaeckbox'>*/}
                                            {/*                <label className='custom-checkbox'>*/}
                                            {/*                    <h6>{translate("TITTLE_COURSE_RUSCHA")}</h6>*/}
                                            {/*                    <input type="checkbox" name="" id=""/>*/}
                                            {/*                    <span></span>*/}
                                            {/*                </label>*/}
                                            {/*            </div>*/}

                                            {/*            <div className='star_chaeckbox'>*/}
                                            {/*                <label className='custom-checkbox'>*/}
                                            {/*                    <h6>{translate("TITTLE_COURSE_INGLISCHA")}</h6>*/}
                                            {/*                    <input type="checkbox" name="" id=""/>*/}
                                            {/*                    <span></span>*/}
                                            {/*                </label>*/}
                                            {/*            </div>*/}

                                            {/*            <div className='star_chaeckbox'>*/}
                                            {/*                <label className='custom-checkbox'>*/}
                                            {/*                    <h6>{translate("TITTLE_COURSE_QOZOQCHA")}</h6>*/}
                                            {/*                    <input type="checkbox" name="" id=""/>*/}
                                            {/*                    <span></span>*/}
                                            {/*                </label>*/}
                                            {/*            </div>*/}

                                            {/*            <div className='star_chaeckbox'>*/}
                                            {/*                <label className='custom-checkbox'>*/}
                                            {/*                    <h6>{translate("TITTLE_COURSE_TOJIKCHA")}</h6>*/}
                                            {/*                    <input type="checkbox" name="" id=""/>*/}
                                            {/*                    <span></span>*/}
                                            {/*                </label>*/}
                                            {/*            </div>*/}

                                            {/*        </div>*/}
                                            {/*    ) : null}*/}
                                            {/*</div>*/}

                                            <div className="courses_sec2_3">
                                                <div
                                                    className="cor_sec2_reyting"
                                                    onClick={() => setBolimlar(prev => !prev)}
                                                >
                                                    <h4>{translate("TITTLE_COURSE_BOLIML")}</h4>
                                                    {bolimlar ? (
                                                        <img src={up_logo} alt=""/>
                                                    ) : (
                                                        <img src={down_logo} alt=""/>
                                                    )}
                                                </div>

                                                {bolimlar ? (
                                                    <div className="bolimlar_check_blog">
                                                        <div className='star_chaeckbox'>
                                                            <label className='custom-checkbox'>
                                                                <h6>{translate("TITTLE_COURSE_FRONTEND")}</h6>
                                                                <input type="checkbox" name="category" id=""
                                                                       checked={fontend} onChange={() => {
                                                                    setFrontend(prevState => !prevState)
                                                                }}/>
                                                                <span></span>
                                                            </label>
                                                        </div>

                                                        <div className='star_chaeckbox'>
                                                            <label className='custom-checkbox'>
                                                                <h6>{translate("TITTLE_COURSE_BACKEND")}</h6>
                                                                <input type="checkbox" name="category" id=""
                                                                       checked={backend} onChange={() => {
                                                                    setBackend(prevState => !prevState)
                                                                }}/>
                                                                <span></span>
                                                            </label>
                                                        </div>

                                                        <div className='star_chaeckbox'>
                                                            <label className='custom-checkbox'>
                                                                <h6>{translate("TITTLE_COURSE_MOBILE")}</h6>
                                                                <input type="checkbox" name="category" id=""
                                                                       checked={mobile} onChange={() => {
                                                                    setMobile(prevState => !prevState)
                                                                }}/>
                                                                <span></span>
                                                            </label>
                                                        </div>

                                                        <div className='star_chaeckbox'>
                                                            <label className='custom-checkbox'>
                                                                <h6>{translate("TITTLE_COURSE_FLUTTER")}</h6>
                                                                <input type="checkbox" name="category" id=""
                                                                       checked={flutter} onChange={() => {
                                                                    setFlutter(prevState => !prevState)
                                                                }}/>
                                                                <span></span>
                                                            </label>
                                                        </div>

                                                        <div className='star_chaeckbox'>
                                                            <label className='custom-checkbox'>
                                                                <h6>{translate("TITTLE_COURSE_SUNIYINTELEKT")}</h6>
                                                                <input type="checkbox" name="category" id=""
                                                                       checked={suniy} onChange={() => {
                                                                    setSuniy(prevState => !prevState)
                                                                }}/>
                                                                <span></span>
                                                            </label>
                                                        </div>

                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="cours_sec2_search_box">
                                                <div className="cours_sec2_search">
                                                    <input type="text" placeholder="Kalit so’zlar..."
                                                           value={searchText}
                                                           onInput={(e) =>
                                                               //@ts-ignore
                                                               setSearchText(e.target.value)}/>
                                                    <img
                                                        src={search_logo}
                                                        alt=""
                                                        placeholder="Kalit so’zlar..."
                                                    />
                                                </div>
                                            </div>
                                            <div className="cours_sec2_hashtag">
                                                <p>#Frontend</p>
                                                <p>#Menejment</p>
                                                <p>#IT</p>
                                                <p>#Startup</p>
                                                <p>#Biznes</p>
                                            </div>
                                        </div>


                                        <div className="korsatish_check">
                                            <button
                                                type="submit">{translate("TITTLE_COURSE_KORSATISH")}</button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="courses_section_2_right">
                                    <div className="courses_section_2_filterMenu">

                                        <div className="courses_section_2_filterLeft">
                                            <div className="courses_section_2_yangiKurs"
                                                 onClick={() => setYangiQoshilganlar(prev => !prev)}>
                                                <h3>{translate("TITTLE_COURSE_YANGIQURSLAR")}</h3>
                                                {!yangiQoshilganlar ?
                                                    <img src={cdown} alt=""/>
                                                    :
                                                    <img src={cdup} alt=""/>
                                                }
                                            </div>
                                            {yangiQoshilganlar ?
                                                <div className="courses_section_2_yangiList">
                                                    <p>sfbadsf</p>
                                                    <p>sdasdas</p>
                                                    <p>Loaewfdrwereawedm</p>
                                                    <p>Lorem.</p>
                                                    <p>amsd</p>
                                                </div>
                                                : null}
                                        </div>
                                        <div className="courses_section_2_filterRight">
                                            <img onClick={() => setFixed(prev => !prev)} src={hamburger_icon} alt=""/>
                                        </div>

                                    </div>
                                    <div className="courses_section_2_right_top">
                                        <Swiper
                                            slidesPerView={8.5}
                                            navigation={true}
                                            breakpoints={{
                                                "10": {
                                                    "slidesPerView": 1.5,
                                                    "spaceBetween": 0
                                                },
                                                "320": {
                                                    "slidesPerView": 2.8,
                                                    "spaceBetween": 10
                                                },
                                                "375": {
                                                    "slidesPerView": 3.2,
                                                    "spaceBetween": 10
                                                },
                                                "425": {
                                                    "slidesPerView": 3.7,
                                                    "spaceBetween": 10
                                                },
                                                "640": {
                                                    "slidesPerView": 5.7,
                                                    "spaceBetween": 10
                                                },
                                                "768": {
                                                    "slidesPerView": 6.8,
                                                    "spaceBetween": 0
                                                },
                                                "1024": {
                                                    "slidesPerView": 6.5,
                                                    "spaceBetween": 0
                                                },
                                                "1440": {
                                                    "slidesPerView": 8.5,
                                                    "spaceBetween": 0
                                                }
                                            }}
                                            className="mySwiper">
                                            <SwiperSlide>
                                                <div className={`category ${!active && "active"}`}
                                                     onClick={(e) => {getCourseHandler(e); setActive(false)}}>{translate("TITTLE_COURSE_BARCHASI")}</div>
                                            </SwiperSlide>
                                            {category?.map(x => (
                                                <SwiperSlide>
                                                    <div className={`category ${((categoryId === x?.id) && active) ? "active" : ""}`}
                                                         onClick={() => {setCategoryId(x?.id); setActive(true)}}>{x?.name}</div>
                                                </SwiperSlide>
                                            ))
                                            }
                                        </Swiper>
                                    </div>

                                    {switchUser ? (
                                            <div>
                                                <div className="courses_section2_cardBox">
                                                    {resultAfterSearch?.length > 0 ?
                                                        resultAfterSearch?.map((x: any) => {
                                                            return (
                                                                <div className="cours_sec2_cardBlock" key={x.id}>
                                                                    <Link to={"/coursesDetails/" + x?.id}>
                                                                        <div className="cours_sec2_imgBlock">
                                                                            <div className="courses_section2_imgSHa">
                                                                                <img className="cours_sec2_img2"
                                                                                     src={x?.image}/>
                                                                            </div>
                                                                            <img className="cours_sec2_img1"
                                                                                 src={x?.author?.image2}
                                                                            />
                                                                        </div>
                                                                    </Link>
                                                                    <div className="cours_sec2_title">
                                                                        <h3>{x.name.length > 50 ? (x.name.substring(0, 30) + "...") : x.name}</h3>
                                                                        <img src={bookmark} alt=""/>
                                                                    </div>
                                                                    <div className="cours_sec2_wiew">
                                                                        <div>
                                                                            <img src={startcard} alt=""/>
                                                                            <p>
                                                                                {x?.course_rank?.rank}
                                                                                <span>({x.course_rank?.count})</span>
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <img src={wiewcard} alt=""/>
                                                                            <p>{x.view}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cours_sec2_xarid">
                                                                        {x.turi !== "Bepul" ?
                                                                            x.discount > 0 ?
                                                                                <h5>{x.price} <span>so'm</span></h5>
                                                                                :
                                                                                <div>
                                                                                    {x.discount > 0 &&
                                                                                    <h6 className="price-sale sale23">{x.discount} so'm</h6>}
                                                                                    <h5 className="price-sale">{x.price}
                                                                                        <span>so'm</span>
                                                                                    </h5>
                                                                                </div>

                                                                            :
                                                                            <p className={x?.turi === "Bepul" ? "freeprice" : " "}>{x?.turi}</p>
                                                                        }
                                                                        <button>{translate("TITTLE_COURSE_XARIDQILISH")}</button>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                        : data && data.map((x: any) => {
                                                            return (
                                                                <div className="cours_sec2_cardBlock" key={x.id}>
                                                                    <Link to={"/coursesDetails/" + x?.id}>
                                                                        <div className="cours_sec2_imgBlock">
                                                                            <div className="courses_section2_imgSHa">
                                                                                <img className="cours_sec2_img2"
                                                                                     src={x?.image}/>
                                                                            </div>
                                                                            <img className="cours_sec2_img1"
                                                                                 src={x?.author?.image2}
                                                                            />
                                                                        </div>
                                                                    </Link>
                                                                    <div className="cours_sec2_title">
                                                                        <h3>{x.name.length > 50 ? (x.name.substring(0, 30) + "...") : x.name}</h3>
                                                                        <img src={bookmark} alt=""/>
                                                                    </div>
                                                                    <div className="cours_sec2_wiew">
                                                                        <div>
                                                                            <img src={startcard} alt=""/>
                                                                            <p>
                                                                                {x?.course_rank?.rank}
                                                                                <span>({x.course_rank?.count})</span>
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <img src={wiewcard} alt=""/>
                                                                            <p>{x.view}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cours_sec2_xarid">
                                                                        {x.turi !== "Bepul" ?
                                                                            x.discount > 0 ?
                                                                                <h5>{x.price} <span>so'm</span></h5>
                                                                                :
                                                                                <div>
                                                                                    {x.discount > 0 &&
                                                                                    <h6 className="price-sale sale23">{x.discount} so'm</h6>}
                                                                                    <h5 className="price-sale">{x.price}
                                                                                        <span>so'm</span>
                                                                                    </h5>
                                                                                </div>

                                                                            :
                                                                            <p className={x?.turi === "Bepul" ? "freeprice" : " "}>{x?.turi}</p>
                                                                        }
                                                                        <button>{translate("TITTLE_COURSE_XARIDQILISH")}</button>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                </div>
                                                {(data || resultAfterSearch ) &&
                                                <PackagePagination
                                                    numbersPage={pageCount}
                                                    pageNumbers={pageNumber}
                                                    setPageNumbers={setPageNumber}
                                                />}
                                            </div>
                                        ) :
                                        <div className='courses_sec2_chanBox'>
                                            {
                                                speakersData?.slice(0, 3).map((item) => {
                                                    return (
                                                        <Coursess data={item}/>
                                                    )
                                                })
                                            }
                                            <div className="courses_section_2_LoadMore">
                                                <button>{translate("TITTLE_COURSE_YANAKORISH")}</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
            </div>
        </React.Fragment>
    );
}

