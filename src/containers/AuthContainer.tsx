import React, {Dispatch, SetStateAction} from "react";
import {Redirect, Route, Switch} from "react-router";
import NotFoundContainer from "./NotFoundContainer";
import {Routes} from "../constants/Routes";
import LoginPage from "../pages/sing_pages/LoginPage";
import SignUp1 from "../pages/sing_pages/SignUpPage";
import SignUp2 from "../pages/sing_pages/SignUpPage2";
import SignUp3 from "../pages/sing_pages/SignUpPage3";
import ParolUnut_1 from "../pages/ForgotPasswordPages/ParolUnut_1/ParolUnut_1";
import ParolUnut_3 from "../pages/ForgotPasswordPages/ParolUnut_3/ParolUnut_3";
import ParolUnut_2 from "../pages/ForgotPasswordPages/ParolUnut_2/ParolUnut_2";


interface Props {
    readonly switchUser: boolean;
    readonly setSwitchUser: Dispatch<SetStateAction<boolean>>;
}
export default function AuthContainer({switchUser, setSwitchUser}: Props) {
    return (
        <Switch>
            <Redirect exact={true} to={Routes.LoginPage} from={Routes.AuthPage}/>
            <Route path={Routes.LoginPage} render={() => <LoginPage switchUser={switchUser} setSwitchUser={setSwitchUser}/>}/>
            <Route path={Routes.SignUp1}  render={() => <SignUp1 switchUser={switchUser} setSwitchUser={setSwitchUser}/>}/>
            <Route path={Routes.SignUp2} render={() => <SignUp2 switchUser={switchUser} />}/>
            <Route path={Routes.SignUp3} render={() => <SignUp3 switchUser={switchUser} />} />
            <Route path={Routes.ForgotPassword1} component={ParolUnut_1} />
            <Route path={Routes.ForgotPassword2} component={ParolUnut_2} />
            <Route path={Routes.ForgotPassword3} component={ParolUnut_3} />
            <Route component={NotFoundContainer} />
        </Switch>
    );
}
