import {BaseApi} from "../BasiApi";
import {Base_Url} from "../../constants/AppConstants";


export class SpeakerApi extends BaseApi {
    public getSpeaker(): Promise<any> {
        return this.get(`${Base_Url}/get-speaker/`)
    }
    public editUserProfile(): Promise<any> {
        return this.get(`${Base_Url}/speaker/`)
    }

}