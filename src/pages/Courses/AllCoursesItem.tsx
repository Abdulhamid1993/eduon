import {Link} from "react-router-dom";
import bookmark from "./img/Bookmark.svg";
import startcard from "./img/starcard.svg";
import wiewcard from "./img/wiewcard.svg";
import React, {useCallback, useEffect, useState} from "react";
import "../../components/css/Courses.css";
import {useI18n} from "../../i18n/I18nContext";
import {useCourseContext} from "../../api/course/CourseContext";
import {useSpeakerContext} from "../../api/speaker/SpeakerContext";
import Xlogo from "./img/Xlogo.svg";
import cdown from "./img/cdown.png";
import cdup from "./img/cdup.png";
import up_logo from "./img/up.png";
import down_logo from "./img/down.png";
import star_logo from "./img/Star.svg";
import search_logo from "./img/search.svg";


interface Props {
    data: any
}

export  default function AllCoursesItem({data}: Props) {
    const {translate} = useI18n();
    return (
        <div className="cours_sec2_cardBlock" key={data.id}>
            <Link to={"/coursesDetails/" + data?.id}>
                <div className="cours_sec2_imgBlock">
                    <div className="courses_section2_imgSHa">
                        <img className="cours_sec2_img2"
                             src={`https://speaker.eduon.uz/${data?.image}`}/>
                    </div>
                    <img className="cours_sec2_img1"
                         src={`https://speaker.eduon.uz/${data?.author?.image2}`}
                    />
                </div>
            </Link>
            <div className="cours_sec2_title">
                <h3>{data.name.length > 50 ? (data.name.substring(0, 30) + "...") : data.name}</h3>
                <img src={bookmark} alt=""/>
            </div>
            <div className="cours_sec2_wiew">
                <div>
                    <img src={startcard} alt=""/>
                    <p>
                        {data?.course_rank?.rank} <span>({data.course_rank?.count})</span>
                    </p>
                </div>
                <div>
                    <img src={wiewcard} alt=""/>
                    <p>{data.view}</p>
                </div>
            </div>
            <div className="cours_sec2_dataarid">
                {data.turi !== "Bepul" ?
                    data.discount > 0 ?
                        <h5>{data.price} <span>so'm</span></h5>
                        :
                        <div>
                            {data.discount > 0 &&
                            <h6 className="price-sale sale23">{data.discount} so'm</h6>}
                            <h5 className="price-sale">{data.price} <span>so'm</span>
                            </h5>
                        </div>

                    :
                    <p className={data?.turi == "Bepul" ? "freeprice" : " "}>{data?.turi}</p>
                }
                <button>{translate("TITTLE_COURSE_XARIDQILISH")}</button>
            </div>
        </div>
    )
}



// {resultAfterSearch ? (resultAfterSearch.map((x: any) => {
//     return (
//         <AllCoursesItem data={x}/>
//     );
// }))  :data?.slice(0, 9).map((x: any) => {
//     return (
//         <AllCoursesItem data={x}/>
//     );
// })}
//

