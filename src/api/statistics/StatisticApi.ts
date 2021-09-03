import {BaseApi} from "../BasiApi";
import {Base_Url} from "../../constants/AppConstants";


export class StatisticApi extends BaseApi {
    public getStatistic(): Promise<any> {
        return this.get(`${Base_Url}/get-statistic/`)
    }
    public getCountry(): Promise<any> {
        return this.get(`${Base_Url}/get-countries/`)
    }
    public getRegions(): Promise<any> {
        return this.get(`${Base_Url}/get-regions/`)
    }
}