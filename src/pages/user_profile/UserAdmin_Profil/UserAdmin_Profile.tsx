import React, {useCallback, useEffect, useState} from 'react';

// import css 
import './UserAdmin_Profile.css'
import "../../../components/css/SignUpPage3.css"

// import img
import photo_icon from './img/photo_icon.svg'
import {useShallowEqualSelector} from "../../../hooks/useShallowSelector";
import {setUser, userSelector} from "../../../reducers/userReducer";
import {useAuthContext} from "../../../api/auth/authContext";
import moment from "moment";
import {useStatisticContext} from "../../../api/statistics/StatisticContext";
import {useDispatch} from "react-redux";


export default function UserAdminProfile() {
    const user = useShallowEqualSelector(userSelector);
    const {authApi} = useAuthContext();
    const {statisticApi} = useStatisticContext();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        first_name: user?.first_name ? user?.first_name : "",
        last_name: user?.last_name ? user?.last_name : "",
        country: "",
        region: "",
        phone: "",
        email: "",
        age: "",
        gender: "",
        job: "",
        image: null
    });
    const [country, setCountry] = useState([]);
    const [region, setRegion] = useState([]);
    const handleChange = (name: string, value: string | File) => {
        setData({
            ...data,
            [name]: value
        })
    };
    const submitHandler = useCallback(() => {
        let form = new FormData();
        form.append("first_name", data.first_name);
        form.append("last_name", data.last_name);
        form.append("country", "1");
        form.append("region", "2");
        form.append("phone", data.phone);
        form.append("email", data.email);
        form.append("age", moment(data.age).format("YYYY-MM-DD"));
        form.append("gender", data.gender);
        //@ts-ignore
        data.image !== null && form.append("image", data.image);
        form.append("job", data.job);
        authApi.userProfileUpdate({
            data: form
        }).then(res => console.log(res, "respinse"))
    }, [data, authApi]);

    useEffect(() => {
        statisticApi.getCountry().then(res => setCountry(res.data));
        statisticApi.getRegions().then(res => setRegion(res.data));
    }, [statisticApi]);

    console.log(data, "data");
    useEffect(() => {
        authApi.userDetails().then(res => {
            if(res.success === true) {
                console.log(res," resposhdl;")
                let user = res.data;
                dispatch(setUser({user}));
            }
        })
    }, [authApi, dispatch]);
    console.log(user, "user")
    return (
        <React.Fragment>
            <div className="UserAdmin_Profile">
                <div className="UserAdmin_Profile_left">
                    <div className="UserAdmin_Profile_left_photo">
                        <img
                            src="https://images.unsplash.com/photo-1625748542965-8ae95d9d2b79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt=""/>
                        <input type="file" className="hide-input"
                            //@ts-ignore
                               onChange={(e) => handleChange("image", e.target.files[0])} id="file"/>
                        <label htmlFor="file">
                            <img src={photo_icon} alt=""/>
                        </label>
                    </div>
                    <div className='UserAdmin_Profile_left_nameMobile'>
                        <input type="text" placeholder="name" defaultValue={user?.first_name}
                               onChange={(e) => handleChange("first_name", e.target.value)}/>
                        <input type="text" placeholder="surname" defaultValue={user?.last_name}
                               onChange={(e) => handleChange("last_name", e.target.value)}/>
                    </div>
                </div>
                {/* close => UserAdmin_Profile_left */}

                <div className="UserAdmin_Profile_right">
                    <div>
                        <label>
                            <span>Ismi</span>
                            <input type="text" placeholder="name" defaultValue={user?.first_name}
                                   onChange={(e) => handleChange("first_name", e.target.value)}/>
                        </label>
                        <label>
                            <span>Telefon raqami</span>
                            <input placeholder="phone" defaultValue={user?.phone} onChange={(e) => handleChange("phone", e.target.value)}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            <span>Sharifi</span>
                            <input type="text" placeholder='Mamasaidov' defaultValue={user?.last_name}
                                   onChange={(e) => handleChange("last_name", e.target.value)}/>
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="text" placeholder='Ulugbek.eduon@gmail.com'
                                   defaultValue={user?.email}
                                   onChange={(e) => handleChange("email", e.target.value)}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            <span>Tug'ulgan sana</span>
                            <input type="text" placeholder='16.01.2002'
                                   defaultValue={user.age}
                                   onChange={(e) => handleChange("age", e.target.value)}/>
                        </label>
                        <label>
                            <span>Kasbingiz</span>
                            <input type="text" placeholder='Marketolog'
                                   defaultValue={user?.job}
                                   onChange={(e) => handleChange("job", e.target.value)}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            <span>Mamlakat</span>
                            <select className="category-select-variant-profile" name="cars" defaultValue={user?.get_country_name}
                                    onChange={(e) => handleChange("country", e.target.value)}
                            >
                                {country && country.map((x: any) => {
                                    return (
                                        <option key={x.id} value={x.id}
                                        >{x.name}</option>
                                    )
                                })
                                }
                            </select>
                        </label>
                        <label>
                            <span>Viloyat</span>
                            <select className="category-select-variant-profile" name="cars" defaultValue={user?.get_region_name}
                                    onChange={(e) => handleChange("region", e.target.value)}
                            >
                                {region && region.map((x: any) => {
                                    return (
                                        <option key={x.id} value={x.id} selected={user?.get_region_name === x.name}>{x.name}</option>
                                    )
                                })
                                }
                            </select>
                        </label>
                    </div>

                    <div className='UserAdmin_Profile_right_jinsi'>
                        <p>Jinsi</p>
                        <div>
                            <label className='SignUpPage3_label'>
                                Erkak
                                <input name='radio' type="radio" value="Erkak" id="radio" defaultChecked={user.gender === "Erkak"}
                                       onChange={(e) => handleChange("gender", e.target.value)}/>
                            </label>

                            <label className='SignUpPage3_label'>
                                Ayol
                                <input name='radio' type="radio" value="Ayol" id="radio"  defaultChecked={user.gender === "Ayol"}
                                       onChange={(e) => handleChange("gender", e.target.value)}/>
                            </label>
                        </div>
                    </div>

                    <button type="submit" onClick={submitHandler}>Saqlash</button>
                </div>
                {/* close => UserAdmin_Profile_right */}
            </div>
            {/* close => UserAdmin_Profile */}
        </React.Fragment>
    );
}
