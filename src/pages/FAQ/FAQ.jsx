import React, { Component } from 'react';
import '../../components/css/FAQ.css'
import send_logo from './img/savol.svg'
import plus_logo from './img/plus.svg'
import x_logo from './img/x.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use( Pagination );



class FAQ extends Component {
    state = { 
        bilim:true,
        savol_1:false,
        savol_2:false,
        savol_3:false,
        savol_4:false,
        savol_5:false,
        savol_6:false
        
     };

     handleBilim = () =>{
         this.setState({
             bilim: !this.state.bilim
         })
     };

     handleQuesion1 = () =>{
         this.setState({
             savol_1:!this.state.savol_1
         })
     };

     handleQuesion2 = () =>{
         this.setState({
             savol_2:!this.state.savol_2
         })
     };

     handleQuesion3 = () =>{
         this.setState({
             savol_3:!this.state.savol_3
         })
     };

     handleQuesion4 = () =>{
         this.setState({
             savol_4:!this.state.savol_4
         })
     };

     handleQuesion5 = () =>{
         this.setState({
             savol_5:!this.state.savol_5
         })
     };

     handleQuesion6 = () =>{
         this.setState({
             savol_6:!this.state.savol_6
         })
     };

    render() { 
        return ( 
            <React.Fragment>
                <div className="FAQ container">
                    <div className="FAQ_sec1">
                        <h1 className="FAQ_none">Ko’p beriladigan</h1>
                        <h3 className="FAQ_none" >savollarga javoblar</h3>
                        <h1 className="FAQ_yes">Savollarga</h1>
                        <h3 className="FAQ_yes">javoblar</h3>
                        <p>Siz ham savol yo’llashingiz mumkin, 6 soat ichida javob beramiz</p>
                        <div className="FAQ_savol">
                            <input type="text" placeholder='Savolingizni yozing...'/>
                            <img src={send_logo} alt="" />
                        </div>

                        {
                            this.state.bilim ? 
                            <div className='FAQ_bilim_oluvchi'>
                                <p className='FAQ_bilim_active FAQ_none'>Bilim oluvchi</p>
                                <p className='FAQ_bilim_active FAQ_yes'>O'quvchi</p>
                                <div className='FAQ_bilim_button1' onClick={this.handleBilim}>
                                    <div className='FAQ_bilim_circle'></div>
                                </div>
                                <p className='FAQ_bilim_pass FAQ_none'>Bilim ulashuvchi</p>
                                <p className='FAQ_bilim_pass FAQ_yes'>O'qituvchi</p>
                            </div>
                            :
                            <div className='FAQ_bilim_oluvchi'>
                                <p className='FAQ_bilim_pass FAQ_none'>Bilim oluvchi</p>
                                <p className='FAQ_bilim_pass FAQ_yes'>O'quvchi</p>
                                <div className='FAQ_bilim_button2' onClick={this.handleBilim}>
                                    <div className='FAQ_bilim_circle'></div>
                                </div>
                                <p className='FAQ_bilim_active FAQ_none'>Bilim ulashuvchi</p>
                                <p className='FAQ_bilim_active FAQ_yes'>O'qituvchi</p>
                            </div>
                        }

                    </div>

                    <div className="FAQ_sec2">
                        
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loopFillGroupWithBlank={true}
                            
                            breakpoints={{
                                "10": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 0
                                },
                                "320": {
                                    "slidesPerView": 3.1,
                                    "spaceBetween": 10
                                },
                                "375": {
                                    "slidesPerView": 3.5,
                                    "spaceBetween": 10
                                },
                                "425": {
                                    "slidesPerView": 4,
                                    "spaceBetween": 10
                                    },
                                "640": {
                                "slidesPerView": 5,
                                "spaceBetween": 10
                                },
                                "768": {
                                    "slidesPerView": 7,
                                    "spaceBetween": 10
                                    },
                                "1024": {
                                "slidesPerView": 7  ,
                                "spaceBetween": 0
                                }
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide><p>Barchasi</p></SwiperSlide>
                            <SwiperSlide><p>To'lovlar</p></SwiperSlide>
                            <SwiperSlide><p>Kurslar</p></SwiperSlide>
                            <SwiperSlide><p>Xarid qilish</p></SwiperSlide>
                            <SwiperSlide><p>Profil</p></SwiperSlide>
                            <SwiperSlide><p>Shikoyat</p></SwiperSlide>
                            <SwiperSlide><p>Boshqalar</p></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            
                        </Swiper>
                    </div>

                    <div className="FAQ_sec3">
                        <div className="FAQ_sec3_titleBox">
                            
                            <div className="FAQ_sec3_title">
                                <div className="FAQ_sec3_quesion" onClick={this.handleQuesion1}>
                                    <h3>Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?</h3>
                                    <div>
                                    {
                                        this.state.savol_1 === false ? 
                                        <img src={plus_logo} alt="" />
                                        :
                                        <img src={x_logo} />
                                    }
                                    </div>
                                    
                                </div>
                                {
                                    this.state.savol_1 ? 
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium enim modi eligendi voluptas totam id reprehenderit cumque eum error ex, fugiat placeat mollitia nesciunt iste asperiores, nobis quasi ad dolor, odit obcaecati. Sequi, illum! Odio labore nostrum veniam. Quaerat tenetur odit perferendis itaque similique beatae? Ab asperiores sunt deleniti nesciunt! Autem facere repellendus ipsum, earum ullam dolores atque fugit, eius alias beatae voluptate eos dolore laborum provident molestias quo. Blanditiis, tempora? Quibusdam, cum perspiciatis?</p>
                                    :
                                    null
                                }
                            </div>
                            
                            <div className="FAQ_sec3_title">
                                <div className="FAQ_sec3_quesion" onClick={this.handleQuesion2}>
                                    <h3>Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?</h3>
                                    <div>
                                    {
                                        this.state.savol_2 === false ? 
                                        <img src={plus_logo} alt="" />
                                        :
                                        <img src={x_logo} />
                                    }
                                    </div>
                                    
                                </div>
                                {
                                    this.state.savol_2 ? 
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium enim modi eligendi voluptas totam id reprehenderit cumque eum error ex, fugiat placeat mollitia nesciunt iste asperiores, nobis quasi ad dolor, odit obcaecati. Sequi, illum! Odio labore nostrum veniam. Quaerat tenetur odit perferendis itaque similique beatae? Ab asperiores sunt deleniti nesciunt! Autem facere repellendus ipsum, earum ullam dolores atque fugit, eius alias beatae voluptate eos dolore laborum provident molestias quo. Blanditiis, tempora? Quibusdam, cum perspiciatis?</p>
                                    :
                                    null
                                }
                            </div>
                            
                            <div className="FAQ_sec3_title">
                                <div className="FAQ_sec3_quesion" onClick={this.handleQuesion3}>
                                    <h3>Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?</h3>
                                    <div>
                                    {
                                        this.state.savol_3 === false ? 
                                        <img src={plus_logo} alt="" />
                                        :
                                        <img src={x_logo} />
                                    }
                                    </div>
                                    
                                </div>
                                {
                                    this.state.savol_3 ? 
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium enim modi eligendi voluptas totam id reprehenderit cumque eum error ex, fugiat placeat mollitia nesciunt iste asperiores, nobis quasi ad dolor, odit obcaecati. Sequi, illum! Odio labore nostrum veniam. Quaerat tenetur odit perferendis itaque similique beatae? Ab asperiores sunt deleniti nesciunt! Autem facere repellendus ipsum, earum ullam dolores atque fugit, eius alias beatae voluptate eos dolore laborum provident molestias quo. Blanditiis, tempora? Quibusdam, cum perspiciatis?</p>
                                    :
                                    null
                                }
                            </div>
                            
                            <div className="FAQ_sec3_title">
                                <div className="FAQ_sec3_quesion" onClick={this.handleQuesion4}>
                                    <h3>Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?</h3>
                                    <div>
                                    {
                                        this.state.savol_4 === false ? 
                                        <img src={plus_logo} alt="" />
                                        :
                                        <img src={x_logo} />
                                    }
                                    </div>
                                    
                                </div>
                                {
                                    this.state.savol_4 ? 
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium enim modi eligendi voluptas totam id reprehenderit cumque eum error ex, fugiat placeat mollitia nesciunt iste asperiores, nobis quasi ad dolor, odit obcaecati. Sequi, illum! Odio labore nostrum veniam. Quaerat tenetur odit perferendis itaque similique beatae? Ab asperiores sunt deleniti nesciunt! Autem facere repellendus ipsum, earum ullam dolores atque fugit, eius alias beatae voluptate eos dolore laborum provident molestias quo. Blanditiis, tempora? Quibusdam, cum perspiciatis?</p>
                                    :
                                    null
                                }
                            </div>
                            
                            <div className="FAQ_sec3_title">
                                <div className="FAQ_sec3_quesion" onClick={this.handleQuesion5}>
                                    <h3>Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?</h3>
                                    <div>
                                    {
                                        this.state.savol_5 === false ? 
                                        <img src={plus_logo} alt="" />
                                        :
                                        <img src={x_logo} />
                                    }
                                    </div>
                                    
                                </div>
                                {
                                    this.state.savol_5 ? 
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium enim modi eligendi voluptas totam id reprehenderit cumque eum error ex, fugiat placeat mollitia nesciunt iste asperiores, nobis quasi ad dolor, odit obcaecati. Sequi, illum! Odio labore nostrum veniam. Quaerat tenetur odit perferendis itaque similique beatae? Ab asperiores sunt deleniti nesciunt! Autem facere repellendus ipsum, earum ullam dolores atque fugit, eius alias beatae voluptate eos dolore laborum provident molestias quo. Blanditiis, tempora? Quibusdam, cum perspiciatis?</p>
                                    :
                                    null
                                }
                            </div>
                            
                            <div className="FAQ_sec3_title">
                                <div className="FAQ_sec3_quesion" onClick={this.handleQuesion6}>
                                    <h3>Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?</h3>
                                    <div>
                                    {
                                        this.state.savol_6 === false ? 
                                        <img src={plus_logo} alt="" />
                                        :
                                        <img src={x_logo} />
                                    }
                                    </div>
                                    
                                </div>
                                {
                                    this.state.savol_6 ? 
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium enim modi eligendi voluptas totam id reprehenderit cumque eum error ex, fugiat placeat mollitia nesciunt iste asperiores, nobis quasi ad dolor, odit obcaecati. Sequi, illum! Odio labore nostrum veniam. Quaerat tenetur odit perferendis itaque similique beatae? Ab asperiores sunt deleniti nesciunt! Autem facere repellendus ipsum, earum ullam dolores atque fugit, eius alias beatae voluptate eos dolore laborum provident molestias quo. Blanditiis, tempora? Quibusdam, cum perspiciatis?</p>
                                    :
                                    null
                                }
                            </div>
                            
                        </div>
                        <button className='FAQ_sec3_yanaBtn'>Yana ko'rsatish</button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default FAQ;