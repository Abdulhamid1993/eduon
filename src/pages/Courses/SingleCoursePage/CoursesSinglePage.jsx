import React, { Component } from "react";
import "./CoursesSinglePage.css";
import { Link, NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import AvatarImg from "./img/Rectangle avatar.svg";
import AvatarLogo from "./img/Rectangle 95.svg";
import Bookmark from "./img/Bookmark.svg";
import Wiev from "./img/wiev.svg";
import Star3 from "./img/Star3.svg";
import SearchLupa from "./img/Search-lupa.svg";
import RightIcon from "./img/Right.svg";
import LeftIcon from "./img/Left.svg";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";


const jsonFile = require("./slayd1.json");
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));
export default function CoursesSinglePage  ()  {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <header className="headerSinglePage">
          <div className="container">
            <div className="header_inner-singlePage">
              <div className="SinglePage_inner-item-left">
                <div className="singlePage-item-img">
                  <div>
                    <div className="singlePage-item-img_1">
                      <img className="imegas-inner" src={AvatarImg} alt="" />
                      <img
                        src={AvatarLogo}
                        alt=""
                        className="imegas-inner-icons"
                      />
                    </div>

                    <h4 className="singlePage-text-name">Hasan Mamasaidov</h4>
                  </div>
                  <div className="singlePage-main-info">
                    <p className="singlePage-text-info border-row">
                      Ma’lumot:
                      <span>
                        Tadbirkor, spiker, ustoz va 9 ga yaqin biznes, loyihalar
                        asoschisi. Bu yerda yana davomiy bir qancha ma’lumotlar
                        bo’lishi mumkin.
                      </span>
                    </p>
                    <p className="singlePage-text-info">
                      Kompaniya: <span> MFaktor, Deli</span>
                    </p>
                    <p className="singlePage-text-info border-bottom">
                      Status: <span> Tadbirkor </span>
                    </p>
                    <div className="div">
                      <div className="singlePage-num-run border-top">
                        <h3 className="singlePage-nummber">12 ta</h3>
                        <span>Kurslar</span>
                      </div>

                      <div className="singlePage-num-run">
                        <h3 className="singlePage-nummber">9,812 ta</h3>
                        <span>O’quvchi</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="singlePage-item-otsenka2">
                  <div className="singlePage-otsenka">
                    <p className="singlePage-text-otsenka">
                      4 <span>(7,965)</span>
                    </p>

                    <div className="singlePage-otsenka-star">
                      <div className={classes.root}>
                        <Rating name="size-medium_1" defaultValue={3} />
                      </div>
                    </div>
                  </div>

                  <div className="singlePage-otsenka margintop1">
                    <p className="singlePage-text-otsenka2"> Video sifati</p>
                    <div className="singlePage-otsenka-star">
                      <div className={classes.root}>
                        <Rating name="size-medium_2" defaultValue={2} />
                      </div>
                    </div>
                  </div>

                  <div className="singlePage-otsenka reyting-none">
                    <p className="singlePage-text-otsenka2"> Spikerga baho </p>
                    <div className="singlePage-otsenka-star">
                      <div className={classes.root}>
                        <Rating name="size-medium_3" defaultValue={5} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <button className="singlePage-otsenka-btn">Baho berish</button> */}
              </div>

              {/* left content tugadi */}


              {/* right content boshlandi */}

              <div className="SinglePage_inner-item-right">
                <div className="singlePage-header-right">
                  <div className="singlePage-category-link">
                   
                   <div className="singlePage_category-links">
                   

                    <div className="divka32">
                    <NavLink activeClassName="activeLinks" exact to="/barchasi">
                      Barchasi
                    </NavLink>
                    <NavLink activeClassName="activeLinks" to="/bepul">
                      Bepul
                    </NavLink>
                    <NavLink activeClassName="activeLinks" to="/top">
                      TOP
                    </NavLink>
                    </div>
                    
                    <div className="lupa">
                      <input
                        placeholder="Nima qidiryapsiz ..."
                        className="inputjon"
                        type="text"
                      />
                      <img src={SearchLupa} alt="" />
                    </div>

                   </div>

                    <Switch>
                      <Route exact path="/barchasi">
                        <div className="singlePage_map-category">
                          {jsonFile.map((kurs) => {
                            return (
                              <div className="singlePage_map-category-inner">
                                <div className="singlePage_map-category-images">
                                  <img
                                    className="singlePage_map-category-images2"
                                    src={kurs.imgbig}
                                  />
                                </div>
                                <div className="singlePage_map-category-title">
                                  <h3>{kurs.title}</h3>
                                  <img src={Bookmark} alt="" />
                                </div>
                                <div className="singlePage_map-category-wiew">
                                  <div>
                                    <img src={Star3} alt="" />
                                    <p>
                                      {kurs.stars} <span>({kurs.all})</span>
                                    </p>
                                  </div>
                                  <div className="singlePage-images-icon5">
                                    <img src={Wiev} alt="" />
                                    <p>{kurs.views}</p>
                                  </div>
                                </div>
                                <div className="singlePage_map-category-price">
                                  {kurs.price !== "Bepul" ? (
                                    kurs.sale === "null" ? (
                                      <h5>
                                        {kurs.price} <span>so‘m</span>
                                      </h5>
                                    ) : (
                                      <div>
                                        <p>{kurs.sale}</p>
                                        <h5>
                                          {kurs.price} <span>so‘m</span>
                                        </h5>
                                      </div>
                                    )
                                  ) : (
                                    <h6>{kurs.price}</h6>
                                  )}
                                  <button>Xarid qilish</button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </Route>
                      <Route path="/bepul">
                        <div className="singlePage_map-category">
                          {jsonFile.map((kurs) => {
                            if (kurs.price === "Bepul") {
                              return (
                                <div className="singlePage_map-category-inner">
                                  <div className="singlePage_map-category-images">
                                    <img
                                      className="singlePage_map-category-images2"
                                      src={kurs.imgbig}
                                    />
                                  </div>
                                  <div className="singlePage_map-category-title">
                                    <h3>{kurs.title}</h3>
                                    <img src={Bookmark} alt="" />
                                  </div>
                                  <div className="singlePage_map-category-wiew">
                                    <div>
                                      <img src={Star3} alt="" />
                                      <p>
                                        {kurs.stars} <span>({kurs.all})</span>
                                      </p>
                                    </div>
                                    <div className="singlePage-images-icon5">
                                      <img src={Wiev} alt="" />
                                      <p>{kurs.views}</p>
                                    </div>
                                  </div>
                                  <div className="singlePage_map-category-price">
                                    {kurs.price !== "Bepul" ? (
                                      kurs.sale === "null" ? (
                                        <h5>
                                          {kurs.price} <span>so‘m</span>
                                        </h5>
                                      ) : (
                                        <div>
                                          <p>{kurs.sale}</p>
                                          <h5>
                                            {kurs.price} <span>so‘m</span>
                                          </h5>
                                        </div>
                                      )
                                    ) : (
                                      <h6>{kurs.price}</h6>
                                    )}
                                    <button>Xarid qilish</button>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </Route>
                      <Route path="/top">
                        <div className="singlePage_map-category">
                          {jsonFile.map((kurs) => {
                            if (kurs.views === "114,554") {
                              return (
                                <div className="singlePage_map-category-inner">
                                  <div className="singlePage_map-category-images">
                                    <img
                                      className="singlePage_map-category-images2"
                                      src={kurs.imgbig}
                                    />
                                  </div>
                                  <div className="singlePage_map-category-title">
                                    <h3>{kurs.title}</h3>
                                    <img src={Bookmark} alt="" />
                                  </div>
                                  <div className="singlePage_map-category-wiew">
                                    <div>
                                      <img src={Star3} alt="" />
                                      <p>
                                        {kurs.stars}
                                        <span>({kurs.all})</span>
                                      </p>
                                    </div>
                                    <div className="singlePage-images-icon5">
                                      <img src={Wiev} alt="" />
                                      <p>{kurs.views}</p>
                                    </div>
                                  </div>
                                  <div className="singlePage_map-category-price">
                                    {kurs.price !== "Bepul" ? (
                                      kurs.sale === "null" ? (
                                        <h5>
                                          {kurs.price} <span>so‘m</span>
                                        </h5>
                                      ) : (
                                        <div>
                                          <p>{kurs.sale}</p>
                                          <h5>
                                            {kurs.price} <span>so‘m</span>
                                          </h5>
                                        </div>
                                      )
                                    ) : (
                                      <h6>{kurs.price}</h6>
                                    )}
                                    <button>Xarid qilish</button>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </Route>
                    </Switch>
                  </div>
                </div>

                <div className="singlePage-nummber-category">
                  <button className="singlePage-nummber-category-btn">
                    <img src={RightIcon} alt="" />
                  </button>
                  <Link className="singlepage-category-link" to="/">
                    1
                  </Link>
                  <Link className="singlepage-category-link" to="/">
                    2
                  </Link>
                  <Link className="singlepage-category-link" to="/">
                    3
                  </Link>
                  <Link className="singlepage-category-link" to="/">
                    4
                  </Link>
                  <button className="singlePage-nummber-category-btn">
                    <img src={LeftIcon} alt="" />
                  </button>
                </div>
              </div>

              {/* right content tugadi */}
            </div>
          </div>
        </header>
      </BrowserRouter>
    </>
  );
};
