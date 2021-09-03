import React, {Dispatch, SetStateAction} from 'react';
import logo from './img/Logo.svg'
import insta from './img/insta.svg'
import telegram from './img/telegram.svg'
import facebook from './img/facebook.svg'
import youtube from './img/youtube.svg'
import '../css/Footer.css'
import {Link} from "react-router-dom"
import {Routes} from "../../constants/Routes";
import {useI18n} from "../../i18n/I18nContext";

interface Props {
    readonly switchUser: boolean;
    readonly setSwitchUser: Dispatch<SetStateAction<boolean>>;
}
export default function Footer({setSwitchUser, switchUser}:Props) {
    const {translate} = useI18n();

    return (
            <React.Fragment>

                {/* footer*/}
                <div className="footer container">
                    <div className="footer_left">
                        <img className="footLogo" src={logo} alt="" />
                        {
                            switchUser ?
                                <div className="spiker spiker_pc">
                                    <p onClick={() => setSwitchUser((prev: any) => !prev)} className='active'>{translate("TITTLE_FOOTERS_OQUVCHI")}</p>
                                    <p onClick={() => setSwitchUser((prev: any) => !prev)} className='pass'>{translate("TITTLE_FOOTERS_SPIKER")}</p>
                                </div>
                                :
                                <div className="spiker spiker_pc">
                                    <p onClick={() => setSwitchUser((prev: any) => !prev)} className='pass'>{translate("TITTLE_FOOTERS_OQUVCHI")}</p>
                                    <p onClick={() => setSwitchUser((prev: any) => !prev)} className='active'>{translate("TITTLE_FOOTERS_SPIKER")}</p>
                                </div>
                        }

                        <div className="social spiker_pc">
                            <a href="#">
                                <img className="insta" src={insta} alt="" />
                            </a>
                            <a href="#">
                                <img src={telegram} alt="" />
                            </a>
                            <a href="#">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={youtube} alt="" />
                            </a>
                        </div>
                    </div>


                    <div className="footer_block">
                        <p>{translate("TITTLE_FOOTERS_VEBSAYT")}</p>
                        <Link to={Routes.MainPage}>{translate("TITTLE_FOOTERS_BOSHSAHIFA")}</Link>
                        <Link to={Routes.Courses}>{translate("TITTLE_FOOTERS_KURSLAR")}</Link>
                        <Link className='foorer_last_ancor' to={Routes.Faq}>{translate("TITTLE_FOOTERS_FAQ")}</Link>
                    </div>

                    <div className="footer_block footer_block_bottom">
                        <p>{translate("TITTLE_FOOTERS_MALUMOTLAR")}</p>
                        <Link to={Routes.About}>{translate("TITTLE_FOOTERS_BIZHAQIMIZDA")}</Link>
                        <Link to={Routes.Conditions}>{translate("TITTLE_FOOTERS_FOYDALANISH")}</Link>
                        <a className='foorer_last_ancor' href="">{translate("TITTLE_FOOTERS_MAXFIYLIK")}</a>
                    </div>

                    <div className="footer_block footer_block_bottom">
                        <p>{translate("TITTLE_FOOTERS_MANZILLAR")}</p>
                        <a href="">{translate("TITTLE_FOOTERS_TOSHKENTSH")} <br />{translate("TITTLE_FOOTERS_RUSTAVELI")}</a>
                        <a href="">+998 99 702 00 88</a>
                        <a className='foorer_last_ancor' href="">Info@eduon.uz</a>
                    </div>

                    <div className="footer_left footer_left_mobil">

                        {
                            switchUser ?
                                <div className="spiker">
                                    <p onClick={() => setSwitchUser((prev: any) => !prev)} className='active'>{translate("TITTLE_FOOTERS_OQUVCHI")}</p>
                                    <p onClick={() => setSwitchUser((prev: any) => !prev)} className='pass'>{translate("TITTLE_FOOTERS_SPIKER")}</p>
                                </div>
                                :
                                <div className="spiker">
                                    <p onClick={() => setSwitchUser((prev: any) => !prev)} className='pass'>{translate("TITTLE_FOOTERS_OQUVCHI")}</p>
                                    <p onClick={() => setSwitchUser((prev: any) => !prev)} className='active'>{translate("TITTLE_FOOTERS_SPIKER")}</p>
                                </div>
                        }

                        <div className="social">
                            <a href="#">
                                <img src={insta} alt="" />
                            </a>
                            <a href="#">
                                <img src={telegram} alt="" />
                            </a>
                            <a href="#">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={youtube} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer_vector container">
                    <p>© <span>EduOn.</span> {translate("TITTLE_FOOTERS_BARCHA")}</p>
                </div>
            </React.Fragment>
         );
}