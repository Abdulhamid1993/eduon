import React, {useCallback, useEffect, useMemo, useState} from "react";
import "./SingleCoursePage/CoursesSinglePage.css";
import "../Courses/courses/css/courses.css"
import {Route, useHistory, useParams} from "react-router-dom";
import {useCourseContext} from "../../api/course/CourseContext";
import Star from "./courses/img-icons/Star2.svg";
import Show from "./courses/img-icons/Show.svg";
import Fill from "./courses/img-icons/Fill4.svg";
import Eduon32 from "./courses/img-icons/img/eduon32.png";
import Rectangle1 from "./courses/img-icons/img/Rectangle 12.svg";
import Play from "./courses/img-icons/img/Play button.svg";
import Star2 from "./courses/img-icons/Star.svg";
import Time from "./courses/img-icons/Time Circle.svg";
import Video from "./courses/img-icons/Video.svg";
import Ticket from "./courses/img-icons/Ticket Star.svg";
import Videob from "./courses/img-icons/Videob.svg";
import User from "./courses/img-icons/img/User.svg";
import User2 from "./courses/img-icons/img/User2.svg";
import User3 from "./courses/img-icons/img/User3.svg";
import User4 from "./courses/img-icons/img/User4.svg";
import Send from "./courses/img-icons/Send.svg";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import Coursess from "./CourseItem";
import axios from "axios";
import CourseVideoModal from "../../components/CourseVideoModal";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade/Fade";
import Rectangl1 from "./courses/img-icons/img/Rectangle1.svg";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import {useShallowEqualSelector} from "../../hooks/useShallowSelector";
import {commitsSelector, setCommits} from "../../reducers/commentReducer"
import {priceFormat} from "../../helpers/PriceFormater";
import {usePaymentContext} from "../../api/payment/PaymentContext";
import {useCommentContext} from "../../api/comment/CommentContext";
import moment from "moment";
import {tokenSelector} from "../../reducers/authReducer";
import {useDispatch} from "react-redux";
import {userIdSelector, userSelector} from "../../reducers/userReducer";

export default function CourseItem() {
    //@ts-ignore
    const {id} = useParams();
    const [data, setData] = useState<any>([]);
    const [speaker, setSpeaker] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [comment, setComment] = useState([]);
    const [commentText, setCommentText] = useState("");
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //mablag' yetarli bolmasa +modal
    const [modalPlus, setmodalPlus] = React.useState(false);
    const [courseModal, setCourseModal] = useState(false);
    const {courseApi} = useCourseContext();
    const {commentApi} = useCommentContext();
    const history  = useHistory();
    const token = useShallowEqualSelector(tokenSelector);
    const {paymentApi} = usePaymentContext();
    const [payment, setPayment] = useState(true);
    const [sum, setSum] = useState<any>("");
    const [orderId, setOrderId] = useState("");
    const user = useShallowEqualSelector(userSelector);
    const userId= useShallowEqualSelector(userIdSelector);
    const comments = useShallowEqualSelector(commitsSelector);
    const dispatch = useDispatch();
    const paymentSubmit = useCallback(() => {
        if (payment) {
            paymentApi.createInvoiceClick({
                query: {amount: sum}
            }).then(res => {
                if(res.success === true) {
                    window.location.assign(`${res.data}`)
                }
            });
        } else {
            paymentApi.createInvoicePayme({
                query: {
                    amount: sum
                }
            }).then((res) => {
                setOrderId(res.data.order_id);
                // if(res.success === true) {
                // axios.post("https://checkout.paycom.uz/", {
                //     method : "PerformTransaction",
                //     params: {
                //         merchant: "5f8826288b2a96c6181f3c75",
                //         account: res.orderId,
                //         amount: sum,
                //         lang: "en"
                //     }
                // }).then(res => console.log(res, "respaone"))
            // }
            })
        }
    }, [sum, paymentApi, payment]);
    const handleSubmit = useCallback(() => {
        paymentApi.createInvoicePayme( {
            query : {
                amount : sum,
            }
          //@ts-ignore
        }).then((res) =>  setOrderId(res.data.order_id));
    }, [paymentApi, sum]);
    const setCommentHandler = useCallback(() => {
        commentApi.setComment({
            data: {
                course_id: id,
                comment: commentText
            }
        }).then(res => {
            if(res.success === true) {
                let comment = res?.data;
                dispatch(setCommits({comment}));
                //@ts-ignore
                document.getElementById("text-comment").value=null
            }
        })
    }, [id, commentApi, commentText, dispatch]);
    useEffect(() => {
        if(!payment) {
            paymentApi.createInvoicePayme({
                query: {
                    amount: sum
                }
            }).then((res) => {
                setOrderId(res.data.order_id);
            })
        }
    }, [sum, paymentApi, payment]);
    let speakerName = data?.author?.full_name;
    useEffect(() => {
        courseApi.getCourseDetailsById({
            query: {
                course_id: id
            }
        }).then(res => setData(res.data))
    }, [courseApi, id]);
    console.log(orderId, "id")
    useEffect(() => {
        axios.get(`http://edubackend.backoffice.uz/api-web/get-speaker/?q=${speakerName}`).then(res => setSpeaker(res.data.data))
    }, [speakerName]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.paycom.uz/integration/js/checkout.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    let total = data?.videos?.map((x: any) => x.duration);
    // const totalDuration = total?.reduce((total: any, amount: any) => total + amount);
    useEffect(() => {
        commentApi.getComment({
            query: {course_id: id}
        }).then(res => {
            if(res.success === true) {
                let comment = res?.data;
                dispatch(setCommits({comment}))
            }
        })
    }, [id, commentApi, dispatch]);
    // console.log(data, "data")
    return (
        <>
            <header className="header">
                <div className="container">
                    {courseModal &&
                    data &&
                    data?.videos &&
                    data?.videos.length &&
                    ((data?.upload_or_youtube === "Youtube" &&
                        data?.trailer.url) ||
                        (data?.upload_or_youtube === "Video" &&
                            data?.videos[0].video)) ? (
                        <CourseVideoModal
                            videos={data?.videos[0]}
                            trailer={data?.trailer}
                            type={data?.upload_or_youtube}
                            setCourseModal={() => setCourseModal(false)}
                        />
                    ) : (
                        ""
                    )}
                    {/*{data &&*/}
                    {/*    <Plyr*/}
                    {/*        options={{*/}
                    {/*            controls: [*/}
                    {/*                'rewind',*/}
                    {/*                'play',*/}
                    {/*                'fast-forward',*/}
                    {/*                'progress',*/}
                    {/*                'current-time',*/}
                    {/*                'duration',*/}
                    {/*                'mute',*/}
                    {/*                'volume',*/}
                    {/*                'settings',*/}
                    {/*                'fullscreen',*/}
                    {/*                "quality",*/}
                    {/*            ],*/}
                    {/*            i18n: {*/}
                    {/*                restart: 'Restart',*/}
                    {/*                rewind: 'Rewind {seektime}s',*/}
                    {/*                play: 'Play',*/}
                    {/*                pause: 'Pause',*/}
                    {/*                fastForward: 'Forward {seektime}s',*/}
                    {/*                seek: 'Seek',*/}
                    {/*                seekLabel: '{currentTime} of {duration}',*/}
                    {/*                played: 'Played',*/}
                    {/*                buffered: 'Buffered',*/}
                    {/*                currentTime: 'Current time',*/}
                    {/*                duration: 'Duration',*/}
                    {/*                volume: 'Volume',*/}
                    {/*                mute: 'Mute',*/}
                    {/*                unmute: 'Unmute',*/}
                    {/*                enableCaptions: 'Enable captions',*/}
                    {/*                disableCaptions: 'Disable captions',*/}
                    {/*                download: 'Download',*/}
                    {/*                enterFullscreen: 'Enter fullscreen',*/}
                    {/*                exitFullscreen: 'Exit fullscreen',*/}
                    {/*                frameTitle: 'Player for {title}',*/}
                    {/*                captions: 'Captions',*/}
                    {/*                settings: 'Settings',*/}
                    {/*                menuBack: 'Go back to previous menu',*/}
                    {/*                speed: 'Speed',*/}
                    {/*                normal: 'Normal',*/}
                    {/*                quality: 'Quality',*/}
                    {/*                loop: 'Loop',*/}
                    {/*            }*/}

                    {/*        }}*/}
                    {/*        source={{*/}
                    {/*            type: "video",*/}
                    {/*            sources: [*/}
                    {/*                {*/}
                    {/*                    src: data?.trailer?.url,*/}
                    {/*                    provider: "youtube",*/}
                    {/*                },*/}
                    {/*            ],*/}
                    {/*        }}*/}

                    {/*    />*/}
                    {/*}*/}
                    <div className="header-inner">
                        <div className="left_content">
                            <h1 className="title-inner">
                                <span className="titlespan">{data && data?.name}</span>
                            </h1>
                            <p className="text-inner">
                                {data && data.description}
                            </p>
                            <div className="avtor">
                                <h4 className="h4inner">
                                    <span>Avtor:</span> {data && data?.author?.full_name}
                                </h4>
                                <div className="star-inner">
                                    <img src={Star}/>
                                    <p className="num-inner bef">
                                        {data && data?.course_rank?.rank}
                                        <span>({data && data?.course_rank?.count})</span>
                                    </p>
                                </div>
                                <div className="star-inner">
                                    <img src={Show}/>
                                    <p className="num-inner">{data && data?.view}</p>
                                </div>
                            </div>
                            <div className="cours">
                                <h4 className="text-item">Kursdan nima olasiz?</h4>
                            </div>

                            <div className="cours-inner-item">
                                <img src={Fill}/>
                                <p>
                                    CRM sistema o’rnatilsa biznes qanday foydalar ko’rishini
                                </p>
                            </div>
                            <div className="cours-inner-item">
                                <img src={Fill}/>
                                <p>Sistemani qayerlardan o’rnatsa bo’lishini</p>
                            </div>
                            <div className="cours-inner-item">
                                <img src={Fill}/>
                                <p>Nega CRM ga o’tish shart ekanligini</p>
                            </div>
                            <div className="cours-inner-item">
                                <img src={Fill}/>
                                <p>CRM orqali LTVni hisoblash usullarini</p>
                            </div>
                            <div className="cours-inner-item borderx">
                                <img src={Fill}/>
                                <p>LTVni oshiruvchi bir qancha ishlovchi keyslarni</p>
                            </div>
                        </div>

                        <div className="right_content">
                            <div className="right_inner" onClick={() => setCourseModal(true)}>
                                <img className="header_video-item" src={Eduon32}/>
                                <img className="header_img-item" src={Rectangle1}/>
                            </div>
                            <h1 className="title-inner2">
                                <span className="titlespan2">Biznesda CRM</span> sistemadan
                                foydalanish va o‘rnatish
                            </h1>
                            <p className="text-inner2">
                                Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes
                                egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning
                                "Strategik marketing" nomli intensiv kurs
                            </p>

                            <div className="avtor-media">
                                <h4 className="h4inner-media">
                                    <span>Avtor:</span> Husan Mamasaidov
                                </h4>
                                <div className="media-otsenka-star">

                                    <div className="star-inner-media">
                                        <img src={Star}/>
                                        <p className="num-inner-media ">
                                            4,2 <span>(12,965)</span></p>
                                    </div>

                                    <div className="star-inner-media bef">
                                        <img src={Show}/>
                                        <p className="num-inner-media">54,112</p>
                                    </div>

                                </div>
                            </div>

                            <p className="right-title">
                                {data?.price} <span>so‘m</span>
                            </p>
                            <button onClick={handleOpen} className="btn1">
                                Xarid qlish
                            </button>
                            <p className="cours-text">Kurs ichida:</p>
                            <div className="cours-inner">
                                <img src={Star2} className="cours-icon"/>
                                <p className="cours-inner-text">
                                    Umrbod egalik qilish imkoniyati
                                </p>
                            </div>
                            <div className="cours-inner">
                                <img src={Time} className="cours-icon"/>
                                <p className="cours-inner-text">100 soatlik videodarslik</p>
                            </div>
                            <div className="cours-inner">
                                <img src={Video} className="cours-icon"/>
                                <p className="cours-inner-text">{data && data?.videos?.length} ta videolar</p>
                            </div>
                            <div className="cours-inner">
                                <img src={Ticket} className="cours-icon"/>
                                <p className="cours-inner-text ">
                                    Kursni tugatganlik haqida sertifikat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="section_inner">
                        <h2 className="section-title">Kurs kimlar uchun?</h2>
                        <div className="section-icon-text">
                            <img src={Fill}/>
                            <p>500,000$ aylanmaga ega bo’lgan tadbirkorlar</p>
                        </div>
                        <div className="section-icon-text">
                            <img src={Fill}/>
                            <p>CEO yoki kompaniyaning bosh marketologlari</p>
                        </div>
                        <div className="section-icon-text">
                            <img src={Fill}/>
                            <p>IT sohasidagi katta kompaniyalar CTOsi</p>
                        </div>
                        <div className="section-icon-text sectionborder">
                            <img src={Fill}/>
                            <p>Senior leveldagi dasturchilar</p>
                        </div>
                        <h2 className="title-info">Kurs haqida ma’lumot</h2>
                        <p className="text-info">
                            Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes
                            egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning
                            "Strategik marketing" nomli intensiv kurslari 1.000.000 so'mga
                            yopiq formatda bo'lib o'tgan edi. 23 yillik tajriba, bir necha
                            sotib olingan pullik kurslardan kelib chiqqan holda, marketing
                            instrumentlaridan foydalanib, to'g'ri strategiya tuzishning
                            qaymoq joylari haqida gapirib o'tgan edilar.<p></p> <br/> Endi
                            siz jonli praktikumda qatnasha olmagan bo'lsangiz, EduOn.uz
                            platformasi bilan kurslarni onlayn formatda, yarim bahosida
                            ko'rishingiz mumkin.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <div className="section_about">
                        <h2 className="section_title-about">Kurs tarkibi</h2>
                        {data && data?.videos?.map((x: any, index: any) => (
                            <div className="section_icon-info" key={x.id}>
                                <img src={Videob}/>
                                <a href="#">{index + 1}. {x.title.substr(0, 1) === "#" ? x.title.substr(3, x.title.length) : x.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-spiker ">
                <div className="container">
                    <h2 className="title-spkier spiker-border">
                        Spiker va o’xshash kurslar
                    </h2>
                    {speaker?.map(x => (
                        <Coursess data={x}/>
                    ))
                    }
                </div>
            </section>

            <section className="coment">
                <div className="container">
                    <div className="coment-inner">
                        <h2 className="coment-title">Izohlar</h2>
                     {comments?.map((x: any) => (
                         <div className="coment-user">
                             <img className="avatar-user" src={`http://edubackend.backoffice.uz${x.user.image}`}/>
                             <div className="coment-username">
                                 <p className="username-item">
                                     {x.user.first_name} {x.user.last_name}
                                     <span className="datacoment">{moment(x.data).format("DD.MM.YYYY")} {moment(x.date).format("HH:mm")}</span>
                                 </p>
                                 <p className="text-coment">{x.comment}</p>
                             </div>
                         </div>
                     ))}
                        <div className="polocoment" >
                            <input className="comentinput" type="text" id="text-comment" placeholder="Izohingizni qoldiring" onChange={(e) => setCommentText(e.target.value)}/>
                            <button className="push-coment" type="submit" onClick={setCommentHandler}><img src={Send} alt=""/></button>
                        </div>

                    </div>
                </div>
            </section>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal_big"
                open={open}
                onClose={handleClose}

                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <div className={modalPlus ? "modal_xarid modal_margin" : "modal_xarid"}>
                        <div className="xarid_info">
                            <div className="xarid_info_1">
                                <h1>Hisob</h1>
                                <div className="form_div">
                                    <h2>Vaucher</h2>
                                    <h3>{user && user?.bonus}</h3>
                                </div>
                                <div className="form_div">
                                    <h2>Pul</h2>
                                    <h3>{user && user?.cash}</h3>
                                </div>
                            </div>
                            <div className="xarid_info_2">
                                <div className="kurs_info">
                                    <img className="kurs_img" src={Rectangl1} alt=""/>
                                    <h1>{data && data?.name}</h1>
                                    <div className="views">
                                        <div>
                                            <img src={Star} alt=""/>
                                            <p>{data && data?.course_rank?.rank}
                                                <span>({data && data?.course_rank?.count})</span></p>
                                        </div>
                                        <div>
                                            <img src={Show} alt=""/>
                                            <p>{data && data?.view}</p>
                                        </div>
                                    </div>
                                    <h2>{data && data?.price}<span>so‘m</span></h2>
                                </div>
                            </div>
                        </div>
                        {modalPlus ?
                            <div className="mablag_yoq">
                                <div className="mablag_alert">
                                    <h1>Hamyoningizda yetarli mablag’ yo’q, hamyoningizni to’ldiring</h1>
                                </div>
                                <div className="pul_miqdori">
                                        <h2>Summa</h2>
                                        <input type="text" value={sum}
                                               onChange={(e) => setSum(e.target.value)}/>
                                </div>
                                <div className="tolov_turi">
                                    <h2>To’lov turi</h2>
                                    <div className='tolov_check'>
                                        <form action="">
                                            <RadioGroup row aria-label="position" name="position" defaultValue="click">
                                                <FormControlLabel
                                                    value="click"
                                                    control={<Radio color="primary"/>}
                                                    label="Click"
                                                    labelPlacement="start"
                                                    className="label_1"
                                                    onClick={() => setPayment(true)}
                                                />
                                                {/*<form id="form-payme" method="POST" action="https://checkout.paycom.uz/">*/}
                                                {/*    <input type="hidden" name="merchant" value="5f8826288b2a96c6181f3c75"/>*/}
                                                {/*    <input type="hidden" name="account[orderId]" value={orderId}/>*/}
                                                {/*    <input type="hidden" name="amount" value={sum}/>*/}
                                                {/*    <input type="hidden" name="lang" value="en"/>*/}
                                                {/*    <input type="hidden" name="button" datatype="svg" value="colored"/>*/}
                                                {/*    <FormControlLabel*/}
                                                {/*        value="payme"*/}
                                                {/*        control={<Radio color="primary"/>}*/}
                                                {/*        label="Payme"*/}
                                                {/*        labelPlacement="start"*/}
                                                {/*        onClick={() => setPayment(false)}*/}
                                                {/*    />*/}
                                                {/*    <button type="submit" className="card-pay" id="payme" onClick={paymentSubmit}>*/}
                                                {/*        Click*/}
                                                {/*    </button>*/}
                                                {/*</form>*/}
                                                <div className="col-md-6">
                                                     <form id="form-payme" method="POST" action={orderId && "https://checkout.paycom.uz/"}>
                                                        <input type="hidden" name="merchant" value="5f8826288b2a96c6181f3c75"/>
                                                        <input type="hidden" name="account[order_id]" value={orderId}/>
                                                        <input type="hidden" name="amount" value={sum*100}/>
                                                        <input type="hidden" name="lang" value="ru"/>
                                                        <input type="hidden" name="button" datatype="svg" value="colored"/>
                                                        <div id="button-container">
                                                            <button type="submit" className="card-pay" id="payme" >
                                                                <img src="/images/payme2.png" alt="payme-card"/>
                                                            </button >
                                                        </div>
                                                         <FormControlLabel
                                                             control={<Radio color="primary"/>}
                                                             label="Click"
                                                             labelPlacement="start"
                                                             className="label_1"
                                                             onClick={handleSubmit}
                                                         />
                                                    </form>
                                                </div>
                                            </RadioGroup>
                                        </form>
                                    </div>
                                </div>
                            </div> : null
                        }
                        <div className="xarid_btn">
                            <button onClick={handleClose} className="back_btn">Bekor qilish</button>
                            {modalPlus ? <button onClick={() => {setmodalPlus(false); paymentSubmit()}}>To’ldirish</button>
                                : <button onClick={() => setmodalPlus(true)}>Xarid qilish</button>}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
