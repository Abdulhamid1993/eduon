import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import "../../components/css/Courses.css";
import {Link} from "react-router-dom";
import bookmark from "../Courses/img/Bookmark.svg";
import startcard from "../Courses/img/starcard.svg";
import wiewcard from "../Courses/img/wiewcard.svg";
import {useCourseContext} from "../../api/course/CourseContext";
import {useI18n} from "../../i18n/I18nContext";
import {useSpeakerContext} from "../../api/speaker/SpeakerContext";

;

interface Props {
    searchText: string,
}

export default function SearchPage({searchText}: Props) {
    //@ts-ignore
    const {id} = useParams();
    const {translate} = useI18n();
    const {speakerApi} = useSpeakerContext();
    const {courseApi} = useCourseContext();
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        let mounted = true;
        courseApi.searchCourse({
            query: {
                search: id
            }
        }).then(res => {
            if (mounted) {
                setData(res.results)
            }
        });
        return () => {
            mounted = false
        }
    }, [courseApi, id]);
    return (
        <div className="search_content _main">
            <h2 className=" title_search">Qidiruv natijasi</h2>

            <div className="container search_content-in" style={{display: "block"}}>
                    {data && data.length > 0 ? data?.map((x: any) => (
                            <div className="courses_section2_cardBox">
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
                            </div>

                        ))
                        : <p>So'rov buyicha , hech narsa topilmadi</p>
                    }
            </div>
        </div>
    )
}