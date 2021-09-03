import {BaseApi, Options} from "../BasiApi";
import {Base_Url} from "../../constants/AppConstants";


export class PaymentApi extends BaseApi {
    public createInvoiceClick(options: Options): Promise<any> {
        return this.get(`${Base_Url}/create-invoise-click/`, options)
    }
    public createInvoicePayme(options: Options): Promise<any> {
        return this.get(`${Base_Url}/create-invoise-payme/`, options)
    }
}