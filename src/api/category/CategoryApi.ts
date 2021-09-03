import {BaseApi} from "../BasiApi";
import {Base_Url} from "../../constants/AppConstants";


export class CategoryApi extends BaseApi {
    public getCategory(): Promise<any> {
        return this.get(`${Base_Url}/get-category/`)
    }
}
