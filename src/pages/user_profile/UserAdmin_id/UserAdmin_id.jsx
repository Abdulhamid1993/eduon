import React from 'react'
import './UserAdmin_id.css'
import UserAdmin_id_video from './UserAdmin_id_videos'
//import img 
import play_icon from './img/play_button.svg'
import share_icon from './img/share.svg'
import replay_icon from './img/replay.svg'
import sent_icon from './img/send.svg'
import info_icon from './img/info.svg'
import star_logo from './img/star.svg'
import bookmark_icon from './img/bookmark.svg'
import view_icon from './img/viewicon.svg'
// import stars
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
// import Browser router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
// import swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

const jsonFile2 = require("./slayd2.json");

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
    },
  }));

  const UserAdmin_id = () => {
    const classes = useStyles();
        return ( 
            <Router>
                <div className="UserAdmin_id">
                    <div className="UserAdmin_id_left">
                        <div className="UserAdmin_id_left_video">
                            <img src={play_icon} alt="" />
                        </div>
                        <div className="UserAdmin_videos_dnone ">
                            <UserAdmin_id_video/>
                        </div>
                        <div className='UserAdmin_id_left_container'>
                            <div className="UserAdmin_id_left_star">
                                <h3>Biznesda CRM sistemadan foydalanish va o‘rnatish</h3>
                                <div className={classes.root}>
                                    <Rating name="size-medium_1" precision={0.5} defaultValue={3} />
                                </div>
                            </div>
                            <p>Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning "Strategik marketing" nomli intensiv kurslari 1.000.000 so'mga yopiq formatda bo'lib o'tgan edi. 23 yillik tajriba, bir necha sotib olingan... Yana</p>
                            <div className='UserAdmin_id_left_avtor'>
                                <p>Avtor: <a href="#"> Husan Mamasaidov</a></p>
                                <a href="#"><img src={share_icon} alt="" /> Ulashish</a>
                            </div>
                            <div className="UserAdmin_id_left_swipper">
                                <Swiper 
                                    slidesPerView="3"
                                //     breakpoints={{
                                //     "10": {
                                //         "slidesPerView": 1.5,
                                //         "spaceBetween": 0
                                //     }
                                // }} 
                                    className="mySwiper">
                                    <SwiperSlide>
                                        <NavLink exact to="/id/comment_1" activeClassName="UserAdmin_id_left_swipper_acat" >
                                            Guruhdagi suhbat
                                        </NavLink>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <NavLink to="/comment_2" activeClassName="UserAdmin_id_left_swipper_acat">
                                            Spiker bilan aloqa
                                        </NavLink>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <NavLink to="/comment_3" activeClassName="UserAdmin_id_left_swipper_acat">
                                            Izohlar
                                        </NavLink>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="UserAdmin_id_left_comment">
                                <Switch>
                                    {/* comment -- Guruhdagi suhbat */}
                                    <Route exact path="/id/comment_1">
                                        <div className="UserAdmin_id_left_comment_card">
                                            <img src="https://picsum.photos/100/100" alt="" />
                                            <div>
                                                <h4>Abduvosiq Abdumalikov</h4>
                                                <h6>29.05.2021 <span>21:15</span></h6>
                                                <p>Zo’r gap yo’q <img src={replay_icon} alt="" /></p>
                                            </div>
                                        </div>
                                        <div className="UserAdmin_id_left_comment_card">
                                            <img src="https://picsum.photos/100/100" alt="" />
                                            <div>
                                                <h4>Sadriddin Abdurahimov</h4>
                                                <h6>24.05.2021 <span>12:13</span></h6>
                                                <p>Rahmat, kurs zo’r ekan <img src={replay_icon} alt="" /></p>
                                            </div>
                                        </div>
                                        <div className="UserAdmin_id_left_comment_card">
                                            <img src="https://picsum.photos/100/100" alt="" />
                                            <div>
                                                <h4>Otabek Nasrullayev</h4>
                                                <h6>12.05.2021 <span>20:09</span></h6>
                                                <p>Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!! <img src={replay_icon} alt="" /></p>
                                            </div>
                                        </div>
                                        <div className="UserAdmin_id_left_comment_card">
                                            <img src="https://picsum.photos/100/100" alt="" />
                                            <div>
                                                <h4>Farrux Turgunov</h4>
                                                <h6>05.04.2021 <span>22:51</span></h6>
                                                <p>Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim. <img src={replay_icon} alt="" /></p>
                                            </div>
                                        </div>
                                    </Route>

                                     {/* comment -- Spiker bilan aloqa */}
                                    <Route path="/comment_2">
                                        <div className="UserAdmin_id_left_comment_contact">
                                            <img src={info_icon} alt="" />
                                            <p>Xabaringiz chat orqali spikerga borib tushadi. Spikerning vaqti bo’lishi bilan xabaringizni javob beradilar. Xabar kelsa sizga chat orqali bildirishnoma keladi.</p>
                                        </div>
                                    </Route>

                                     {/* comment -- Izohlar */}
                                    <Route path="/comment_3">
                                        Izohlar 
                                    </Route>
                                </Switch>

                            </div> {/* close => UserAdmin_id_left_comment */}

                            <div className="UserAmin_UserAdmin_id_left_input_border">
                                <div className="UserAdmin_id_left_input">
                                    <input type="text" placeholder='Xabaringizni qoldiring' />
                                    <img src={sent_icon} alt="" />
                                </div>
                            </div>
                        </div> {/* close = > UserAdmin_id_left_container */}

                        <div className="UserAdmin_id_left_spiker">
                            <h1>Spiker va o’xshash kurslar</h1>
                                {
                                    jsonFile2.map( (chan) => {
                                        return(
                                            <div className='UserAdmin_id_left_spiker_swipper'>
                                                <Swiper 
                                                slidesPerView="3"
                                                freeMode={true}
                                                // breakpoints={{
                                                // "350": {
                                                //     "slidesPerView": 1.5,
                                                //     "spaceBetween": 0
                                                //     },
                                                // "425": {
                                                //     "slidesPerView": 2,
                                                //     "spaceBetween": 0
                                                //     }
                                                // }} 
                                                className="mySwiper">
                                                    <SwiperSlide>
                                                        <div className="UserAdmin_id_left_spiker_swipper_chan">
                                                            <img src={chan.imgsmall} alt="" />
                                                            <h3>{chan.full_name}</h3>
                                                            <h4>{chan.kasbi}</h4>
                                                            <h4>{chan.compony}</h4>
                                                            <p> <img src={star_logo} alt="" /> {chan.satars_teach} <span> {chan.stars_all} </span> </p>
                                                            <button>Profil</button>
                                                        </div>
                                                    </SwiperSlide>
                                                    {
                                                        chan.cours.map( (kurs) => {
                                                            return(
                                                                <SwiperSlide>
                                                                    <div className="UserAdmin_id_left_spiker_swipper_cours">
                                                                        <img src={kurs.imgbig} alt="" /> 
                                                                        <div className='UserAdmin_id_left_spiker_swipper_title'>
                                                                            <p>{kurs.title}</p>
                                                                            <img src={bookmark_icon} alt="" />
                                                                        </div>
                                                                        <div className="UserAdmin_id_left_spiker_swipper_rate">
                                                                            <div>
                                                                                <img src={star_logo} alt="" />
                                                                                <p>{kurs.stars} <span>{kurs.all}</span></p>
                                                                            </div>
                                                                            <div>
                                                                                <img src={view_icon} alt="" />
                                                                                <p>{kurs.views}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="UserAdmin_id_left_spiker_swipper_sale">
                                                                            <p>{kurs.price} <span>so'm</span> </p>
                                                                            <button>Xarid qilish</button>
                                                                        </div>
                                                                    </div>

                                                                
                                                                </SwiperSlide>
                                                            )
                                                        } )
                                                    }

                                                </Swiper>
                                            </div> // close  => UserAdmin_id_left_spiker_swipper_chan
                                            
                                        )
                                    } )
                                }
                        </div> {/* close => UserAdmin_id_left_spiker */}

                    </div> {/* close => UserAdmin_id_left */}

                    <div className="UserAdmin_id_right">
                            <UserAdmin_id_video/>
                    </div> {/* close => UserAdmin_id_right */}
                </div>
            </Router>
         );
    }

 
export default UserAdmin_id;