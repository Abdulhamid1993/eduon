import React from "react";
import Star from "./img-icons/Star2.svg";
import Show from "./img-icons/Show.svg";
import Fill from "./img-icons/Fill4.svg";
import Rectangle1 from "./img-icons/img/Rectangle 12.svg";

import Play from "./img-icons/img/Play button.svg";
import Video from "./img-icons/Video.svg";
import Time from "./img-icons/Time Circle.svg";
import Ticket from "./img-icons/Ticket Star.svg";
import Star2 from "./img-icons/Star.svg";
import Videob from "./img-icons/Videob.svg";
import Paper from "./img-icons/Paper.svg";
import Tickets from "./img-icons/Ticket Star1.svg";
import Rectangl from "./img-icons/img/Rectangl.svg";
import Rectangl1 from "./img-icons/img/Rectangle1.svg";
import Rectangl2 from "./img-icons/img/Rectangle2.svg";
import Bookmark from "./img-icons/img/Bookmark.svg";
import User from "./img-icons/img/User.svg";
import User2 from "./img-icons/img/User2.svg";
import User3 from "./img-icons/img/User3.svg";
import User4 from "./img-icons/img/User4.svg";
import Send from "./img-icons/Send.svg"
import Star99 from './img-icons/Star99.svg'
import Eduon32 from './img-icons/img/eduon32.png'
import "./css/courses.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";


export default function Coursesss () {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="header-inner">
              <div className="left_content">
                <h1 className="title-inner">
                  <span className="titlespan">Biznesda CRM</span> sistemadan
                  foydalanish va o‘rnatish
                </h1>
                <p className="text-inner">
                  Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes
                  egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning
                  "Strategik marketing" nomli intensiv kurs
                </p>
                <div className="avtor">
                  <h4 className="h4inner">
                    <span>Avtor:</span> Husan Mamasaidov
                  </h4>
                  <div className="star-inner">
                    <img src={Star} />
                    <p className="num-inner bef">
                      4,2 <span>(12,965)</span>
                    </p>
                  </div>
                  <div className="star-inner">
                    <img src={Show} />
                    <p className="num-inner">54,112</p>
                  </div>
                </div>
                <div className="cours">
                  <h4 className="text-item">Kursdan nima olasiz?</h4>
                </div>

                <div className="cours-inner-item">
                  <img src={Fill} />
                  <p>
                    CRM sistema o’rnatilsa biznes qanday foydalar ko’rishini
                  </p>
                </div>
                <div className="cours-inner-item">
                  <img src={Fill} />
                  <p>Sistemani qayerlardan o’rnatsa bo’lishini</p>
                </div>
                <div className="cours-inner-item">
                  <img src={Fill} />
                  <p>Nega CRM ga o’tish shart ekanligini</p>
                </div>
                <div className="cours-inner-item">
                  <img src={Fill} />
                  <p>CRM orqali LTVni hisoblash usullarini</p>
                </div>
                <div className="cours-inner-item borderx">
                  <img src={Fill} />
                  <p>LTVni oshiruvchi bir qancha ishlovchi keyslarni</p>
                </div>
              </div>

              <div className="right_content">
                <div className="right_inner">
                  <img className="header_video-item" src={Eduon32} />
                  <img className="header_img-item" src={Rectangle1} />
                  <img className="header_play-item" src={Play} />
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
                    <img src={Star} />
                    <p className="num-inner-media ">
                      4,2 <span>(12,965)</span></p>
                  </div>

                  <div className="star-inner-media bef">
                    <img src={Show} />
                    <p className="num-inner-media">54,112</p>
                  </div>

                  </div>
                </div>

                <p className="right-title">
                  12,400,000 <span>so‘m</span>
                </p>
                <button className="btn1">
                  <a href="#">Xarid qlish</a>
                </button>
                <p className="cours-text">Kurs ichida:</p>
                <div className="cours-inner">
                  <img src={Star2} className="cours-icon" />
                  <p className="cours-inner-text">
                    Umrbod egalik qilish imkoniyati
                  </p>
                </div>
                <div className="cours-inner">
                  <img src={Time} className="cours-icon" />
                  <p className="cours-inner-text">12,5 soatlik videodarslik</p>
                </div>
                <div className="cours-inner">
                  <img src={Video} className="cours-icon" />
                  <p className="cours-inner-text">7 ta videolar</p>
                </div>
                <div className="cours-inner">
                  <img src={Ticket} className="cours-icon" />
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
                <img src={Fill} />
                <p>500,000$ aylanmaga ega bo’lgan tadbirkorlar</p>
              </div>
              <div className="section-icon-text">
                <img src={Fill} />
                <p>CEO yoki kompaniyaning bosh marketologlari</p>
              </div>
              <div className="section-icon-text">
                <img src={Fill} />
                <p>IT sohasidagi katta kompaniyalar CTOsi</p>
              </div>
              <div className="section-icon-text sectionborder">
                <img src={Fill} />
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
                qaymoq joylari haqida gapirib o'tgan edilar.<p></p> <br /> Endi
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
              <div className="section_icon-info">
                <img src={Videob} />
                <a href="#">1. Strategik marketing (treyler)</a>
              </div>
              <div className="section_icon-info">
                <img src={Videob} />
                <a href="#">2. SWOT analiz qilish</a>
              </div>
              <div className="section_icon-info">
                <img src={Videob} />
                <a href="#">3. Ish muhiti</a>
              </div>
              <div className="section_icon-info">
                <img src={Videob} />
                <a href="#">4. Biznesda politika qanday bo'ladi</a>
              </div>
              <div className="section_icon-info">
                <img src={Videob} />
                <a href="#">5. Bir burun qoydasi</a>
              </div>
              <div className="section_icon-info">
                <img src={Paper} />
                <a href="#">SWOT dokument</a>
              </div>
              <div className="section_icon-info">
                <img src={Videob} />
                <a href="#">7. Fundamental marketing</a>
              </div>
              <div className="section_icon-info">
                <img src={Videob} />
                <a href="#">8. Mijozlarimizning umrlik qiymati.</a>
              </div>
              <div className="section_icon-info">
                <img src={Tickets} />
                <a href="#">Sertifikat</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spiker ">
          <div className="container">
            <h2 className="title-spkier spiker-border">
              Spiker va o’xshash kurslar
            </h2>
            <div className="spiker_inner">
            <Swiper
              slidesPerView={3}
              breakpoints={{
                "320": {
                  "slidesPerView": 1.5
                },
                "375": {
                  "slidesPerView": 1.5
                },
                "425": {
                  "slidesPerView": 1.5
                },
                "768": {
                  "slidesPerView": 2.9
                }
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="spiker-price">
                <div className="spiker-price-inner">
                  <img src={Rectangl} />
                  <h3 className="spiker-name">Husan M.</h3>
                  <p className="mar">Biznes</p>
                  <p>MFaktor</p>
                  <div className="star-inner marr">
                    <img className="spiker-img" src={Star} />
                    <p className="num-inner bef bef1">
                      4,6 <span>(1,011)</span>
                    </p>
                  </div>
                  <button className="spiker-button">
                    <a href="#">Profil</a>
                  </button>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="spiker-inner2">
                <img src={Rectangl1} className="spiker-inner-img" />
                <div className="spiker-inner-text">
                  <p>Biznesda CRM sistemadan foydalanish va o‘rnatish</p>
                  <img src={Bookmark} />
                </div>

                <div className="spiker-inner3">
                  <div className="spiker-inner-icon">
                    <img src={Star99} className="spiker-icon" />
                    <p>
                      4,2 <span>(12,965)</span>
                    </p>
                  </div>
                  <div className="spiker-inner-icon">
                    <img src={Show} className="spiker-icon" />
                    <p>54,112</p>
                  </div>
                </div>

                <div className="spiker-price">
                  <p>
                    1,150,000 <span>so'm</span>
                  </p>
                  <button>
                    <a href="#">Xarid qilhish</a>
                  </button>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="spiker-inner2">
                <img src={Rectangl2} className="spiker-inner-img" />
                <div className="spiker-inner-text">
                  <p>Biznesda CRM sistemadan foydalanish va o‘rnatish</p>
                  <img src={Bookmark} />
                </div>

                <div className="spiker-inner3">
                  <div className="spiker-inner-icon">
                    <img src={Star99} className="spiker-icon" />
                    <p>
                      3,7 <span>(8,169)</span>
                    </p>
                  </div>
                  <div className="spiker-inner-icon">
                    <img src={Show} className="spiker-icon" />
                    <p>14,846</p>
                  </div>
                </div>

                <div className="spiker-price">
                  <p>
                    1,150,000 <span>so'm</span>
                  </p>
                  <button>
                    <a href="#">Xarid qilhish</a>
                  </button>
                </div>
              </div>
              </SwiperSlide>
            </Swiper> 
            </div>
          </div>
        </section>

        <section className="coment">
          <div className="container">
            <div className="coment-inner">
              <h2 className="coment-title">Izohlar</h2>
              <div className="coment-user">
                <img className="avatar-user" src={User} />
                <div className="coment-username">
                  <p className="username-item">
                    Abduvosiq Abdumalikov
                    <span className="datacoment">29.05.2021 21:15</span>
                  </p>
                  <p className="text-coment">Zo’r gap yo’q </p>
                </div>
              </div>

              <div className="coment-user">
                <img className="avatar-user" src={User2} />
                <div className="coment-username">
                  <p className="username-item">
                    Sadriddin Abdurahimov
                    <span className="datacoment">24.05.2021 12:13</span>
                  </p>
                  <p className="text-coment">Rahmat, kurs zo’r ekan</p>
                </div>
              </div>

              <div className="coment-user">
                <img className="avatar-user" src={User3} />
                <div className="coment-username">
                  <p className="username-item">
                    Otabek Nasrullayev
                    <span className="datacoment">12.05.2021 20:09</span>
                  </p>
                  <p className="text-coment">
                    Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq
                    emas ovoz. Lekin baribir zo'r !!!
                  </p>
                </div>
              </div>

              <div className="coment-user">
                <img className="avatar-user avatarm" src={User4} />
                <div className="coment-username">
                  <p className="username-item">
                      Farrux Turgunov
                    <span className="datacoment">05.04.2021 22:51</span>
                  </p>
                  <p className="text-coment">Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim. </p>
                </div>
              </div>

                <div className="polocoment">
                  <input className="comentinput" type="text" placeholder="Izohingizni qoldiring"/>
                  <button className="push-coment"><img src={Send} alt="" /></button>
                </div>

            </div>
          </div>
        </section>
        
      </>
    );
}
