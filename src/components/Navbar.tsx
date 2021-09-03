import React, {Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState} from 'react';
import searchIcon from "./icons/Search.svg"
import close from "./icons/close.svg"
import logo from "./icons/Logo.svg"
import menu from "./icons/menu.svg"
import arrowdown from "./icons/arrowdown.svg"
import {Link, NavLink, useHistory} from 'react-router-dom';
import "./css/header.css"
import {Routes} from "../constants/Routes";
import {AppLanguage, listLanguages, useI18n} from "../i18n/I18nContext";
import {appLanguageSelector, switchLanguage} from "../reducers/appReducer";
import {useShallowEqualSelector} from "../hooks/useShallowSelector";
import {useDispatch} from "react-redux";
import {clearUser, userFirstNameSelector, userIdSelector, userLastNameSelector} from "../reducers/userReducer";
import {resetToken, tokenSelector} from '../reducers/authReducer';
import {useAuthContext} from "../api/auth/authContext";

interface Props {
    searchText: string
    setSearchText: Dispatch<SetStateAction<string>>;
}
export default function Navbar({setSearchText, searchText}:Props) {
    const dispatch = useDispatch();
    const {translate} = useI18n();
    const history = useHistory();
    const {logout} = useAuthContext();
    const [search, setSearch] = useState(false);
    const [toggle, setToggle] = useState(false);
    const token = useShallowEqualSelector(tokenSelector);
    const userId = useShallowEqualSelector(userIdSelector);
    const language = useShallowEqualSelector(appLanguageSelector);
    const userName = useShallowEqualSelector(userFirstNameSelector);
    const lastName = useShallowEqualSelector(userLastNameSelector);
    const onSelect = (value: AppLanguage) => dispatch(switchLanguage({language: value}));
    const list = useMemo(() => listLanguages().filter((x) => x !== language), [language]);
    const logoutHandler = useCallback(() => {
        dispatch(clearUser());
        dispatch(resetToken());
        history.push("/main");
    }, [dispatch]);
    // useEffect(() => {
    //     if(token === undefined || null) {
    //         logoutHandler()
    //     }
    // }, [history, token]);
    // useEffect(() => {
    //     if ( userId === null) {
    //         history.push("/main");
    //     }
    // }, [history]);
    return (
        <React.Fragment>
            <header>
                <div className="navbar__asos">
                    <nav className="container">
                        <div className="gamburger">
                            <button onClick={() => setToggle(prevState => !prevState)}><img src={menu} alt=""/></button>
                            <ul className={toggle ? "toggle" : ""}>
                                <div className="menu__login">
                                    <div className="menu__login__tillar">
                                        <a href="#">O'z</a>
                                        <a href="#">En</a>
                                        <a href="#">Рус</a>
                                    </div>
                                    <div className="menu__login__btn">
                                        <Link onClick={() => setToggle(prevState => !prevState)}
                                              to={Routes.AuthPage}>Kirish</Link>
                                    </div>
                                </div>
                                <li><Link onClick={() => setToggle(prev => !prev)} to="/">Bosh sahifa</Link></li>
                                <li><Link onClick={() => setToggle(prev => !prev)} to={Routes.Courses}>Kurslar</Link>
                                </li>
                                <li><Link onClick={() => setToggle(prev => !prev)} to={Routes.Faq}>FAQ</Link></li>
                                <li><Link onClick={() => setToggle(prev => !prev)} to={Routes.About}>Biz
                                    haqimizda</Link></li>
                                <li className="menu__close">
                                    <img src={close} onClick={() => setToggle(prevState => !prevState)} alt=""
                                         width="25"/>
                                </li>

                            </ul>
                        </div>
                        <div className="logo">
                            <Link to="/"><img src={logo} alt=""/></Link>
                        </div>
                        <div className="navbar">
                            {!search ?
                                <div className="nav__bar">
                                    <ul>
                                        <li>
                                            <div className="links"><NavLink activeClassName="activ__nav"
                                                                            to={Routes.MainPage}>{translate("NAVBAR_MAIN_PAGE_TITTLE")}</NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="links"><NavLink activeClassName="activ__nav"
                                                                            to={Routes.Courses}>{translate("NAVBAR_COURSES_TITTLE")}</NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="links"><NavLink activeClassName="activ__nav"
                                                                            to={Routes.Faq}>{translate("NAVBAR_FAQ_TITTLE")}</NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="links"><NavLink activeClassName="activ__nav"
                                                                            to={Routes.About}>{translate("NAVBAR_ABOUT_TITTLE")}</NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                    <button></button>
                                </div>
                                :
                                <div className="search">
                                    <div className="search__input">
                                        <form onSubmit={() => history.push(`/search/${searchText}`)}>
                                            <span ><img src={searchIcon} alt="" width="20"/></span>
                                            <input type="search" name="" placeholder="Kurslar bo'ylab qidiruv" id="" onChange={(e) => {e.preventDefault(); setSearchText(e.target.value)}}/>
                                        </form>
                                    </div>
                                    <button onClick={() => setSearch(prevState => !prevState)}><img src={close} alt=""
                                                                                                    width="20"/>
                                    </button>
                                </div>
                            }

                            <div className="login__bar">
                                {!search ?
                                    <>
                                        <button onClick={() => setSearch(prevState => !prevState)}><img src={searchIcon}
                                                                                                        alt=""
                                                                                                        width="20"/>
                                        </button>
                                        <button className="menu425" onClick={() => setToggle(prev => !prev)}><img
                                            src={menu} alt=""/></button>
                                    </> :
                                    <button className="close__btn"></button>
                                }
                                <div className="language">
                                    <p>{language}</p>
                                    <ul className="languages">
                                        {list.map(x => (
                                            <li key={x} onClick={() => onSelect(x)}>{x}</li>
                                        ))}
                                    </ul>
                                    <img src={arrowdown} alt="" width="25"/>
                                </div>
                                {token === undefined ?
                                    <Link to={Routes.AuthPage} className="kirish">{translate("NAVBAR_LOGIN_TITTLE")}</Link>
                                    :
                                    //@ts-ignore
                                    <div className="login_btn">
                                        <p className="kirish"
                                           style={{cursor: "pointer"}}>{userName && userName?.toLocaleUpperCase().substr(0, 1) + lastName?.toLocaleUpperCase().substr(0, 1)}
                                        </p>
                                        <div className="login_popup">
                                            <div className="login_popu__body">
                                                <Link to={Routes.UserProfile}><div className="login_popup__item">Shahsiy kabinet</div></Link>
                                                <div className="login_popup__item" onClick={logout}>Chiqish</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="fixed"></div>
            </header>
        </React.Fragment>
    );
}