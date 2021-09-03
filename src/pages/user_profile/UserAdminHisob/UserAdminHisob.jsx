import React, { useState } from 'react'

// import img
import plus_icon from './img/plus.svg'
import kirim_icon from './img/kirim.svg'
import chiqim_icon from './img/chiqim.svg'
import down_icon from './img/down.svg'

// import react modal
import Modal from "react-modal";

// import css
import './UserAdminHisob.css'

// import json file
const JsonHisob = require("./JsonHisob.json");


const UserAdminHisob = () => {
    const [isOpen, setisOpen] = useState(false);
    const [detailed, setDetailed] = useState(false)
    const [idca, setId] = useState()
    const showDetailed = (id) => {
        setDetailed(!detailed)
        setId(id)
    }
    return (
        <div className="UserAdminHisob">
            <div className="UserAdminHisob_top">

                {/* card 1 hisob */}
                <div className="UserAdminHisob_top_card">
                    <p>Umumiy hisobim</p>
                    <h1>12,000,000 <span>  so’m</span></h1>
                </div>

                {/* card 1 hisob */}
                <div className="UserAdminHisob_top_card">
                    <p>Umumiy hisobim</p>
                    <h1>11,000,000 <span>  so’m</span></h1>
                </div>

                {/* card 1 hisob */}
                <div className="UserAdminHisob_top_card">
                    <p>Umumiy hisobim</p>
                    <h1>1,000,000 <span>  so’m</span></h1>
                </div>

                {/* Add Cash */}
                <div className="UserAdminHisob_top_AddCash">
                    <img src={plus_icon} alt="" onClick={() => setisOpen(!isOpen)} />
                    <p>Hisobni to’ldirish</p>
                </div>

            </div> {/* close => UserAdminHisob_top */}

            <div className="UserAdminHisob_bottom UserAdminHisob_bottom_pc">
                <span>Kirim chiqimlar</span>
                {
                    JsonHisob.map((kurs) => {
                        return (

                            kurs.situation === 'Kurs Olindi' ?
                                <div className="UserAdminHisob_bottom_card">
                                    <div>
                                        <img src={chiqim_icon} alt="" />
                                    </div>
                                    <p>{kurs.situation}</p>
                                    <p>{kurs.date} - {kurs.time}</p>
                                    <p>{kurs.TechName}</p>
                                    <p>{kurs.KursName}</p>
                                </div>
                                :
                                <div className="UserAdminHisob_bottom_card">
                                    <div>
                                        <img src={kirim_icon} alt="" />
                                    </div>
                                    <p>{kurs.situation}</p>
                                    <p>{kurs.date} - {kurs.time}</p>
                                    <p>{kurs.CardNumber}</p>
                                    <p>{kurs.CardName}</p>
                                </div>


                        )
                    })
                }
            </div> {/* close => UserAdminHisob_bottom pc */}

            <div className="UserAdminHisob_bottom UserAdminHisob_bottom_mobile">
                <span>Kirim chiqimlar</span>
                {
                    JsonHisob.slice(0, 9).map((kurs, id) => {
                        return (

                            kurs.situation === 'Kurs Olindi' ?
                                <div className="UserAdminHisob_bottom_card">
                                    <div onClick={() => showDetailed(id)}>
                                        <img src={chiqim_icon} alt="" />
                                        <p>{kurs.date} - {kurs.time}</p>
                                        <img  src={down_icon} alt="" />
                                    </div>
                                    {
                                        id === idca ?
                                            detailed === true ?
                                                <>
                                                    <p>{JsonHisob[idca].situation}</p>
                                                    <p>{JsonHisob[idca].TechName}</p>
                                                    <p>{JsonHisob[idca].KursName}</p>
                                                </> : null
                                            :
                                            null
                                    }
                                </div>
                                :
                                <div className="UserAdminHisob_bottom_card">
                                    <div onClick={() => showDetailed(id)}>
                                        <img src={kirim_icon} alt="" />
                                        <p>{kurs.date} - {kurs.time}</p>
                                        <img  src={down_icon} alt="" />
                                    </div>
                                    {
                                        idca === id ?
                                            detailed === true ?
                                                <>
                                                    <p>{JsonHisob[idca].situation}</p>
                                                    <p>{JsonHisob[idca].CardNumber}</p>
                                                    <p>{JsonHisob[idca].CardName}</p>
                                                </> : null
                                            :
                                            null
                                    }
                                </div>


                        )
                    })
                }
            </div> {/* close => UserAdminHisob_bottom  mobile*/}



            {/*  */}
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setisOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgb(36, 71, 120, 0.36)",
                    },
                    content: {
                        width: "554px",
                        height: "430px",
                        left: "0",
                        right: "0",
                        marginTop: '154px',
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "24px",
                        padding: "36px 36px 36px 36px",
                    },
                }}
            >

                <div className='UserAdminHisob_CashModal'>
                    <p>Summa</p>
                    <div className='UserAdminHisob_CashModal_summa'>
                        <input type="number " placeholder='17,000,000 so’m' />
                    </div>

                    <p>To'lov turi</p>
                    <div className='UserAdminHisob_CashModal_cardName'>

                        <label className='custom-checkbox'>
                            Click
                            <input name='cardTyp' type="radio" name="a1" id="" />
                        </label>

                        <label className='custom-checkbox'>
                            Payme
                            <input name='cardTyp' type="radio" name="a1" id="" />
                        </label>

                    </div>

                    <div className='UserAdminHisob_CashModal_Button'>
                        <button>Bekor qilish</button>
                        <button>To'ldirish</button>
                    </div>
                </div>

            </Modal>
            {/*  */}

        </div> // close => UserAdminHisob
    );
}


export default UserAdminHisob;