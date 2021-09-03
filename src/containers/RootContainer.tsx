    import {Route, Switch } from "react-router";
import React, {Suspense, useState} from "react";
import NotFoundContainer from "./NotFoundContainer";
// import Loader from "../components/ui/Loader";
import {Routes} from "../constants/Routes";
import {Redirect} from "react-router-dom";
import "../components/css/main.css"
import "../components/css/main2.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import MainPageContainer from "./MainPageContainer";
import SearchPage from "../pages/SearchPage/SearchPage";
import AuthContainer from "./AuthContainer";


const Courses = React.lazy(() => import("../pages/Courses/Courses"));
const Faq = React.lazy(() => import("../pages/FAQ/FAQ"));
const About = React.lazy(() => import("../pages/Block_1/Block_1"));
const Conditions = React.lazy(() => import("../pages/abouts/aboutas"));
const UserProfile = React.lazy(() => import("../pages/user_profile/userAdmin/UserAdmin"));
const CourseItem = React.lazy(() => import("../pages/Courses/[id]"));
const Payment = React.lazy(() => import("../pages/payment/[id]"));


export function RootContainer() {
    const [switchUser, setSwitchUser] = useState(true);
    const [searchText, setSearchText] = useState("");
    return (
        <Suspense
            fallback={
                <div className="preloader">
                    {/*<Loader />*/}
                </div>
            }
        >
            <div className="wrapper">
                <Navbar setSearchText={setSearchText} searchText={searchText}/>
                <Switch>
                    <Redirect exact={true} to={Routes.MainPage} from="/"/>
                    <Route path={Routes.MainPage}
                           render={() => <MainPageContainer switchUser={switchUser} setSwitchUser={setSwitchUser}/>}/>
                    <Route path={Routes.Courses}
                           render={() => <Courses setSwitchUser={setSwitchUser} switchUser={switchUser}/>}/>
                    <Route path={Routes.Faq} component={Faq}/>
                    <Route path={Routes.About} component={About}/>
                    <Route path={Routes.Conditions} component={Conditions}/>
                    <Route path={Routes.AuthPage} render={() => <AuthContainer  switchUser={switchUser} setSwitchUser={setSwitchUser}/>}/>
                    <Route path={Routes.UserProfile} component={UserProfile} />
                    <Route path={Routes.CoursesById} component={CourseItem}/>
                    <Route path={Routes.Payment} component={Payment}/>
                    <Route path={Routes.Search} render={() => <SearchPage searchText={searchText}/>}/>
                    <Route component={NotFoundContainer}/>
                </Switch>
                <Footer switchUser={switchUser} setSwitchUser={setSwitchUser}/>
            </div>
        </Suspense>
    );
}
