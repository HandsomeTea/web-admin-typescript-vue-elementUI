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

    public async test(body?: object): Promise<apiResult> {
        return HTTP.get('/tests/test/api', { data: body }).then(async r => await this.successHandle(r)).catch(async e => await this.errorHandle(e));
    }
}
