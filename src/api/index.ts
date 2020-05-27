import { AxiosResponse } from 'axios';

import HTTP from './http';

export default new class API {
    constructor() {
        this._init();
    }

    private _init(): void {

    }

    private errorHandle(error: httpException): Promise<apiResult> {
        return Promise.resolve({ error });
    }

    private successHandle(data: any): Promise<apiResult> {
        return Promise.resolve({ data });
    }

    private promissHandle(result: Promise<AxiosResponse<any>>): Promise<apiResult> {
        return result.then(async r => await this.successHandle(r)).catch(async e => this.errorHandle(e));
    }

    public async test(body?: object): Promise<apiResult> {
        return this.promissHandle(HTTP.get('/tests/test/api', { data: body }));
    }
}
