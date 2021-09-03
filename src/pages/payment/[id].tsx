import React, {useEffect, useState , useRef} from 'react'
import {useDispatch} from "react-redux";
import {Link, useHistory, useParams} from "react-router-dom"
import {useShallowEqualSelector} from "../../hooks/useShallowSelector";
import {userIdSelector, userSelector} from "../../reducers/userReducer";
import {priceFormat} from "../../helpers/PriceFormater";
import {Routes} from "../../constants/Routes";
import {useCourseContext} from "../../api/course/CourseContext";
// import Layout from '../../components/layouts/PageLayout/Layout'
// import Link from 'next/link'
// import {getExistingUser} from "../../components/Auth/store/storeActions";
// import {api} from "../../api/api";
// import {useDispatch, useSelector} from "react-redux";
// import {useRouter} from "next/router";
// import Loader from "../../components/ui/Loader/Loader";
// import {priceFormat} from "../../helpers/helper";
// import {orderCourse} from "../../components/Courses/store/courseActions";
// import * as t from "../../components/Courses/store/courseTypes";

export default function Payment () {
	const dispatch = useDispatch()
	// const userId = useSelector(state => state.auth.userId)
	// const userDetails = useSelector(state => state.auth.userDetails)
	const {courseApi} = useCourseContext();
	const user = useShallowEqualSelector(userSelector);
	const userId = useShallowEqualSelector(userIdSelector);
	const [course, setCourse] = useState<any>([]);
	const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
	const history = useHistory();
	//@ts-ignore
	const { id } = useParams();
	useEffect(() => {
		if(!userId){
			history.replace(Routes.AuthPage)
		}
		if(id && userId){
			courseApi.getCourseDetailsById({
				query: {
					course_id: id
				}
			}).then(res => setCourse(res.data))
		}
	},[courseApi, userId, id]);
	// const handleOnBuy = () => {
	// 	dispatch(orderCourse(userId, id));
	// 	dispatch({type: t.JUST_BOUGHT,payload: id})
	// 	setLoading(true)
	//
	// 	router.replace(`/course/${id}`)
	// }

	console.log(course, "user");
	const modal = (
		<div className="modal fade show" tabIndex={-1} role="dialog" style={{display: "block", paddingRight: "16px"}}>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="modal-title" id="exampleModalCenterTitle">Tasdiqlang</h2>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={() => setModalOpen(false)}>
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						{user && course
							//@ts-ignore
								? <p>Shu kursni sotib olishga ishonchingiz komilmi? Hozir sizda <b>{priceFormat(user.cash + user.bonus)}</b> bor. Kursning narxi esa <b>{priceFormat(course.price-course.discount)}</b>. Kurs sotib olgandan so'ng sizning balansizngiz<b>{priceFormat((user.cash + user.bonus)-course.price+course.discount)}</b> ga teng boladi!</p>
							: ''}
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-danger" onClick={() => setModalOpen(false)}>Orqaga</button>
						{/*<button type="button" className="btn btn-success" onClick={handleOnBuy}>Sotib olish</button>*/}
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="paymentWay-content">
			<div className="page-title-block">
				<div className="container">
					<h1 className="page-title">Sotib olish</h1>
				</div>
			</div>

			<section className="payment-content">
				{course && user ? <div className="container ">
					<div className="row">
						<div className="col-lg-4">

							<div className="balance-content">
								<div className="balance-title">Kursi narxi</div>
								<div className="balance text-primary">{priceFormat(course.price-course.discount)}</div>
								<div className="balance-title mt-4">Mening balansim</div>
								<div className="balance text-grey">{priceFormat(user.cash)}</div>
								<div className="balance-title mt-4">Mening vaucherim</div>
								<div className="balance text-grey">{priceFormat(user.bonus)}</div>
								{/* <div className="balance-title mt-4">Referal link</div>
									<div  onMouseMove={()=>setrefPpup(true)} onMouseLeave={()=>setrefPpup(false)} className="balance-ref-link text-grey"><div className="link-link">
									<div className={refPpup ? "popup-referal" : "d-none"}>
							Do'stingiz bilan ulashing va siz ham do'stingiz ham 5000 so'mdan vaucherga ega bo'ling.

							</div>
							<input ref={inputR}  onFocus={()=>handleFocus()} type="text"  value={"https://eduon.uz/registration?ref="+userDetails.own_ref_code} />
							</div> <div  onClick={() =>  navigator.clipboard.writeText("https://eduon.uz/registration?ref="+userDetails.own_ref_code)} className="link-button"><img src="/images/copy.png" alt=""/></div>
									</div> */}

								{(user.cash + user.bonus) < course.price-course.discount ?
									<>

										<div className="alert alert-danger mt-4" role="alert">
											Balansingizda yetarli mablag' mavjud emas! Iltimos, avval balansinzini to'ldiring.
										</div>
										<Link to={"/fill-balance?c="+(priceFormat(course.price- course.discount - (user.cash+ user.bonus)))}>
											<a className="btn btn-primary mt-2">Balansni to'ldirish</a>
										</Link>
									</> : ''}
							</div>
						</div>
						<div className="col-lg-8">
							<div className="course-card">
								<div className="row d-flex align-items-center">
									<div className="col-md-3">
										<div className="course-img-payment">
											<img src={`https://speaker.eduon.uz/${course.image}`} alt={course.name} />
										</div>
									</div>
									<div className="col-md-6">
										<div className="course-info-payment">
											<div className="course-info-title">{course.name}</div>
										</div>
									</div>
									<div className="col-md-3">
										<div className="course-info-price text-primary">{priceFormat(course.price-course.discount)}</div>
									</div>
								</div>
							</div>
							{(user.cash + user.bonus).toString() >= course.price-course.discount ?
								<div className="payment-buttons d-flex justify-content-end mt-4" >
									<button className="btn btn-primary" onClick={() => setModalOpen(true)}>Sotib olish</button>
								</div>
								: ''}
						</div>

					</div>
				</div> : <div className="page-static-loader">
					Loading...
				</div>}
			</section>
			{modalOpen && modal}
		</div>
	)
}