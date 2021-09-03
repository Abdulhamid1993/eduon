import React, {useEffect, useState} from 'react';
import folder_icon from '../img/Folder_icon.svg'
import profile_icon from '../img/Profile_icon.svg'
import wallet_icon from '../img/Wallet_icon.svg'
import chat_icon from '../img/Chat_icon.svg'
import download_icon from '../img/Download_icon.svg'
import i_icon from '../img/i.svg'

// import component
import UserAdmin_1 from '../UserAdmin_1/UserAdmin_1'
import UserAdmin_id from '../UserAdmin_id/UserAdmin_id'
import UserAdminHisob from '../UserAdminHisob/UserAdminHisob'

// import css
import "./UserAdmin.css"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, Redirect
} from "react-router-dom";
import {Routes} from "../../../constants/Routes";
import UserAdminProfile from '../UserAdmin_Profil/UserAdmin_Profile';
import {usePaymentContext} from "../../../api/payment/PaymentContext";
import {useShallowEqualSelector} from "../../../hooks/useShallowSelector";
import {tokenSelector} from "../../../reducers/authReducer";


export default function UserAdmin() {
    const {paymentApi} = usePaymentContext();
    const [modal, setModal] = useState(false);
    const token = useShallowEqualSelector(tokenSelector);
    useEffect(() => {
        paymentApi.createInvoiceClick({
            query: {
                amount: 10000
            }
        }).then(res => console.log(res, "payment"))
    }, [paymentApi]);
        return (
            <Router>
                {token === undefined && <Redirect to={Routes.MainPage} exact/>}
                <div className="UserAdmin container">
                    {
                        modal ?
                        <div className="UserAdmin_sidebar_modal" onClick={() => setModal(false)}>
                            <div onClick={() => setModal(true)}>
                                <img src={i_icon} alt="" />
                                <p>Referal linkini do’stlaringizga ulashing va pullik vaucherlarga ega bo’ling.</p>
                            </div>
                        </div>
                        :
                        null
                    }
               
                    <div className="UserAdmin_sidebar">
                        <div className="UserAdmin_sidebar_top">

                            {/* Sidebar Line - 1  ( Kurslarim ) */}
                            <Redirect to={Routes.UserProfileCourses} from={Routes.UserProfile} exact/>
                            <NavLink activeClassName="UserAdmin_sidebar_act" exact to={Routes.UserProfileCourses}>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={folder_icon} alt="" />
                                </div>
                                    Kurslarim
                            </NavLink>

                            {/* Sidebar Line - 2  ( Hisobim )  */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" to={Routes.UserProfileBalance}>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={wallet_icon} alt="" />
                                        </div>
                                    Hisobim

                            </NavLink>

                            {/* Sidebar Line - 3  ( Chat )  */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" to='/user-profile/Chat'>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={chat_icon} alt="" />
                                        </div>
                                    Chat

                            </NavLink>

                            {/* Sidebar Line - 4  ( Profil ) */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" to={Routes.UserProfileProfile}>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={profile_icon} alt="" />
                                </div>
                                    Profil
                            </NavLink>
                            
                            {/* id  */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" to={Routes.UserProfileId}>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={profile_icon} alt="" />
                                </div>
                                    id
                            </NavLink>

                            <p>Referal link</p>

                            <div className='UserAdmin_sidebar_link_block'>
                                <input type="text" value='https://eduon...' />
                                <div onClick={() => setModal(true)} >
                                    <img src={download_icon} alt="" />
                                </div>
                            </div>
                            
                        </div>{/* close => UserAdmin_sidebar_top */}

                        <div className='UserAdmin_sidebar_bottom'>
                            <h3>Hisobim</h3>
                            <h2>12,000,000 <span>so'm</span></h2>
                            <button>Hisobni to'ldirish</button>
                        </div>

                    </div> {/* close => UserAdmin_sidebar */}


                    {/* UserAdmin Main */}
                    <div className='UserAdmin_main'>
                    <Switch>
                        <Route path={Routes.UserProfileCourses} component={UserAdmin_1}/>
                        <Route path={Routes.UserProfileBalance} component={UserAdminHisob}/>
                        <Route path="/user-profile/Chat">
                           <h1>3- page</h1>
                        </Route>
                        <Route path={Routes.UserProfileProfile} component={UserAdminProfile}/>
                        <Route path={Routes.UserProfileId}  component={UserAdmin_id}/>
                    </Switch>
                    </div>
                </div>
            </Router>
         );
}
