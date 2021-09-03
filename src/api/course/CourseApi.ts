import {BaseApi, Options} from "../BasiApi";
import {Base_Url} from "../../constants/AppConstants";


export class CourseApi extends BaseApi {
    public getCourses(options?: Options): Promise<any> {
        return this.get(`${Base_Url}/get-course/`, options)
    }
    public getTopCourse(): Promise<any> {
        return this.get(`${Base_Url}/top-course/`)
    }
    public getSpeakerCourses(options: Options): Promise<any> {
        return this.get(`${Base_Url}/get-spekaer-courses/`, options)
    }
    public buyCourse(options: Options): Promise<any> {
        return this.post(`${Base_Url}/buy-course/`, options)
    }
    public getBoughtCourse(): Promise<any> {
        return this.get(`${Base_Url}/get-boughted-course/` )
    }
    public getCourseDetailsById(options: Options): Promise<any> {
        return this.get(`${Base_Url}/course-detail/`, options )
    }
    public getNewCourses(): Promise<any> {
        return this.get(`${Base_Url}/new-course/`)
    }
    public searchCourse(options: Options): Promise<any> {
        return this.get(`${Base_Url}/get-course/`, options )
    }
}