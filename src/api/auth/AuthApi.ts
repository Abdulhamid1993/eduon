import {BaseApi, Options} from "../BasiApi";
import {Base_Url} from "../../constants/AppConstants";


export class AuthApi extends BaseApi {
    public loginCredentials(options: Options): Promise<any> {
        return this.get(`${Base_Url}/send-code/`, options)
    }
    public codeVerify(options: Options): Promise<any> {
        return this.get(`${Base_Url}/verify-code/`, options)
    }
    public fullRegister(options: Options): Promise<any> {
        return this.post(`${Base_Url}/registration/`, options)
    }
    public login(options: Options): Promise<any> {
        return this.post(`${Base_Url}/login/`, options)
    }
    public resetPassword(options: Options): Promise<any> {
        return this.post(`${Base_Url}/reset-password/`, options)
    }
    public sendMessage(options: Options): Promise<any> {
        return this.post(`${Base_Url}/about-us-note/`, options)
    }
    public userProfileUpdate(options: Options): Promise<any> {
        return this.put(`${Base_Url}/users/`, options)
    }
    public userDetails(): Promise<any> {
        return this.put(`${Base_Url}/users/`)
    }

}