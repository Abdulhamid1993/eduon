import React from "react";
import {useI18n} from "../i18n/I18nContext";

export default function NotFoundContainer() {
    const {translate} = useI18n();
    return (
        <>
            <main>
                <section className="section-main">
                    <div id="notfound">
                        <div className="notfound">
                            <div className="notfound-404">
                                {/*<h3>Oops! Page not found</h3>*/}
                                <h3>{translate("PAGE_NOT_FOUND_TITTLE")}</h3>
                                <h1><span>4</span><span>0</span><span>4</span></h1>
                            </div>
                            {/*<h2>we are sorry, but the page you requested was not found</h2>*/}
                            <h2>{translate("PAGE_NOT_FOUND_FOOTER_TITTLE")}</h2>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}