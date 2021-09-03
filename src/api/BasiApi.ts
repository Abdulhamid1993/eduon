import qs from "qs";
//@ts-ignore
import { pathParams } from "path-params";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {AppLanguage} from "../i18n/I18nContext";
import {API_HOST} from "../constants/AppConstants";
import { AppError } from "../helpers/AppError";


export interface ApiProps {
    readonly token?: string;
    readonly language?: AppLanguage;
}

export interface Options extends AxiosRequestConfig {
    readonly query?: object | [];
    readonly params?: object | [];
    readonly FormData?: any
}

export class BaseApi {
    private readonly token?: string;

    constructor({token}: ApiProps) {
        this.token = token;
    }

    private queryToString(query: object = {}): string {
        return qs.stringify(query);
    }

    private createRequestUrl(url: string, query: object = {}, params: object = {}): string {
        const formattedUrl = pathParams(url, params);

        return [formattedUrl, this.queryToString(query)].filter(Boolean).join("?");
    }

    private createRequestOptions(options: AxiosRequestConfig): AxiosRequestConfig {
        let {headers = {}} = options;

        if (this.token) {
            headers = {"Authorization" : `Bearer ${this.token}`};
        }
        return {
            baseURL: API_HOST,
            ...options,
            headers
        };
    }

    private request<T>(url: string, options: Options = {}): Promise<T> {
        const {query, params, ...kyOptions} = options;

        const formattedOptions = this.createRequestOptions(kyOptions);
        const formattedUrl = this.createRequestUrl(url, query, params);

        return axios.request({
            url: formattedUrl,
            ...formattedOptions,
        });
    }

    private jsonRequest<T>(url: string, options?: Options): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.request<AxiosResponse>(url, options)
                .then((response) => {
                    if (response.status === 200 || response.status === 201) {
                        return response.data || [];
                    }

                    return this.parseError(response.status, response);
                })
                .then((data) => {
                    if (data.status === 204) {
                        return resolve({} as T);
                    }

                    return resolve(data);
                }).catch((error) => {
                    if (error instanceof AppError) {
                        reject(error);
                    } else if (error.name === "TimeoutError") {
                        reject(
                            this.parseError(500, {
                                title: "Timeout",
                                errors: "Время ожидания подключения истекло, попробуйте позже.",
                                violations: [],
                            }),
                        );
                    }
                }
            );
        });
    }

    private parseError(statusCode: number, response: any): AppError {
        const error = new AppError(response.message);

        error.status = statusCode;
        error.data = response.errors;

        return error;
    }

    public get<T = any>(url: string, options?: Options): Promise<T> {
        return this.jsonRequest(url, {...options, method: "get"});
    }

    public post<T = any>(url: string, options?: Options): Promise<T> {
        return this.jsonRequest(url, {...options, method: "post"});
    }

    public put<T = any>(url: string, options?: Options): Promise<T> {
        return this.jsonRequest(url, {...options, method: "put"});
    }

    public delete<T = any>(url: string, options?: Options): Promise<T> {
        return this.jsonRequest(url, {...options, method: "delete"});
    }
}
