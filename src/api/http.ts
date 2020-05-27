import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import Agent from 'agentkeepalive';
import { type } from '../utils';

class Exception extends Error {
    private status: number;
    private type?: string | undefined;
    private error: object;
    private httpInfo: string;

    constructor(error: httpException) {
        super(error.httpInfo);

        this.status = error.status;
        this.type = error.type;
        this.error = error.error;
        this.httpInfo = error.httpInfo
    }
}

export default new class HTTP {
    constructor() {
        this._init();
    }

    private _init(): void {
        axios.defaults.timeout = 10000;
        axios.defaults.httpAgent = new Agent({
            keepAlive: true,
            maxSockets: 100,
            maxFreeSockets: 10,
            timeout: 60000, // active socket keepalive for 60 seconds
            freeSocketTimeout: 30000 // free socket keepalive for 30 seconds
        });
        // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

        // 请求拦截器
        axios.interceptors.request.use(this._beforeSendToServer, this._beforeSendToServerButError);

        // 响应拦截器
        axios.interceptors.response.use(this._receiveSuccessResponse, this._receiveResponseNotSuccess);
    }

    private _beforeSendToServer(config: AxiosRequestConfig): AxiosRequestConfig {
        const zh = config.url?.match(/[\u4e00-\u9fa5]/g);

        if (zh) {
            const _obj: object = {};

            for (let i: number = 0; i < zh.length; i++) {
                if (!_obj[zh[i]]) {
                    _obj[zh[i]] = encodeURIComponent(zh[i]);
                }
            }

            for (const key in _obj) {
                config.url = config.url?.replace(new RegExp(key, 'g'), _obj[key]);
            }
        }

        return config;
    }

    private async _beforeSendToServerButError(error: any): Promise<httpException> {
        return Promise.reject(new Exception({
            httpInfo: `${error}`,
            status: 0,
            error: {
                info: 'request send error: not send.'
            }
        }));
    }

    private async _receiveSuccessResponse(response: AxiosResponse): Promise<any> {
        // 这里只处理 response.status >= 200 && response.status <= 207 的情况
        const { data/*, config, headers, request, status, statusText*/ } = response;

        return Promise.resolve(data.data);
    }

    private async _receiveResponseNotSuccess(error: any): Promise<httpException> {
        // const { message, name, description, number, fileName, lineNumber, columnNumber, stack, code } = error.toJSON();
        const { response, config/*, request */ } = error;
        const { baseURL/*, url, method*/ } = config;

        let errorResult: httpException = {
            status: 500,
            httpInfo: ` 访问 ${baseURL} 失败`,
            error: { info: '' }
        };

        if (response) {
            const { status, statusText, data } = response;

            errorResult = {
                status,
                httpInfo: statusText,
                ...type(data) === 'string' ? { error: { info: data } } : data
            };
        }

        return Promise.reject(new Exception(errorResult));
    }

    public async send(url: string, method: Method, options: httpArgument): Promise<AxiosResponse<any>> {
        return await axios.request({
            url,
            method,
            baseURL: ['development', undefined].includes(process?.env?.NODE_ENV) ? undefined : 'https://xxx.xxx.cxx',
            headers: options.headers,
            params: { ...options.params },
            data: { ...options.data }
        });
    }

    public async post(url: string, options: httpArgument): Promise<AxiosResponse<any>> {
        return await this.send(url, 'post', { params: options.params, headers: options.headers, data: options.data });
    }

    public async delete(url: string, options: httpArgument): Promise<AxiosResponse<any>> {
        return await this.send(url, 'delete', { params: options.params, headers: options.headers, data: options.data });
    }

    public async put(url: string, options: httpArgument): Promise<AxiosResponse<any>> {
        return await this.send(url, 'put', { params: options.params, headers: options.headers, data: options.data });
    }

    public async get(url: string, options: httpArgument): Promise<AxiosResponse<any>> {
        return await this.send(url, 'get', { params: options.params, headers: options.headers, data: options.data });
    }
};
