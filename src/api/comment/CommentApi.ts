import {BaseApi, Options} from "../BasiApi";
import {Base_Url} from "../../constants/AppConstants";


export class CommentApi extends BaseApi {
    public getComment(options: Options): Promise<any> {
        return this.get(`${Base_Url}/get-comment/`, options)
    }
    public setComment(options: Options): Promise<any> {
        return this.post(`${Base_Url}/set-comment/`, options)
    }
}