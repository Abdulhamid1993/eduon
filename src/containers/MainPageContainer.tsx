import React, {Dispatch, SetStateAction} from "react";
import {Route, Switch} from "react-router";
import NotFoundContainer from "./NotFoundContainer";
import {Routes} from "../constants/Routes";
import Ellipse from "../components/icons/Ellipse.svg";
import Cursor from "../components/icons/Cursor.svg";
import Bilimolish from "../pages/Bosh_sahifa/Bilimolish";
import Bilimberish from "../pages/Bosh_sahifa/Oqitish";


interface Props {
    readonly switchUser: boolean;
    readonly setSwitchUser: Dispatch<SetStateAction<boolean>>;
}

export default function MainPageContainer({setSwitchUser, switchUser}:Props) {
    return (
        <Switch>
            <Route exact path={Routes.MainPage}>
                <main>
                    <div className="background__img container">
                        <img className="ellipse" src={Ellipse} alt="" />
                        <img className="cursor " src={Cursor} alt="" />
                    </div>
                    {switchUser ?
                        <div className="bilimolish"><Bilimolish handlebilim={() => setSwitchUser(prevState => !prevState)} /></div>
                        :
                        <div className="bilimberish"><Bilimberish handlebilim={() => setSwitchUser(prevState => !prevState)} /></div>
                    }
                </main>
            </Route>
            <Route component={NotFoundContainer} />
        </Switch>
    );
}
